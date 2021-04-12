import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Item } from '../item.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit, OnDestroy {
  constructor(
    private dataService: DataService
  ) {}

  items: Item[];
  dataSubscription: Subscription;
  getLazyData: Subscription;
  selectedNode: Item;
  loading: boolean;


  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.dataSubscription = this.dataService
        .getData()
        .subscribe((data) => (this.items = data));
      this.loading = false;
    }, 1000);
  }

  nodeExpand(event): void {
    this.loading = true;
    if (event.node) {
      setTimeout(() => {
        this.getLazyData = this.dataService
          .getLazyItems(event.node.id)
          .subscribe((data: Item[]) => {
            event.node.children = data;
          });
        this.loading = false;
      }, 500);
    }
  }

  nodeSelect(event): void {
    this.dataService.selectNode(<Item> event.node);
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
    this.getLazyData.unsubscribe();
  }
}
