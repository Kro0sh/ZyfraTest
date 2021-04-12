import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TreeModule } from 'primeng/tree';
import { TreeComponent } from './tree/tree.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AppComponent, TreeComponent, DataTableComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TreeModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
