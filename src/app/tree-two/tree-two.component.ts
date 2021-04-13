import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {Item} from '../item.model';

@Component({
  selector: 'app-tree-two',
  templateUrl: './tree-two.component.html',
  styleUrls: ['./tree-two.component.scss']
})
export class TreeTwoComponent implements OnInit {

  @Input() nodes: Item[];
  @Output() selectedNode = new EventEmitter<Item>();
  currentNode: Item;

  constructor() { }

  ngOnInit(): void {
  }

  nodeSelect(event): void {
    this.selectedNode.emit(event.node);
  }

}
