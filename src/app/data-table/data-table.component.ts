import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Item} from '../item.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  currentNode;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentNode.subscribe(
      currentNode => {
        if (currentNode) {
          this.currentNode = currentNode;
        }
      });
  }
}
