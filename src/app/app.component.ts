import {Component, OnInit} from '@angular/core';
import { DataService } from './data.service';
import {Item} from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  nodes: Item[];
  selectedItem: Item[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(nodes => this.nodes = nodes);
  }

  onSelectedItem(selectedElement: Item): void {
    this.selectedItem = [selectedElement];
  }
}
