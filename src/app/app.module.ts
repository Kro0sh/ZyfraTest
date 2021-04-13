import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeModule } from 'primeng/tree';
import { TreeComponent } from './tree/tree.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TableModule } from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import { TreeTwoComponent } from './tree-two/tree-two.component';
import { DataTableTwoComponent } from './data-table-two/data-table-two.component';

@NgModule({
  declarations: [AppComponent, TreeComponent, DataTableComponent, TreeTwoComponent, DataTableTwoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TreeModule,
    TableModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
