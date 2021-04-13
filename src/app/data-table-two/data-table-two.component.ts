import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../item.model';

@Component({
  selector: 'app-data-table-two',
  templateUrl: './data-table-two.component.html',
  styleUrls: ['./data-table-two.component.scss']
})
export class DataTableTwoComponent implements OnInit {

  @Input() tableData: Item[];

  constructor() { }

  ngOnInit(): void {
  }

}
