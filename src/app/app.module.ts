import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataGridComponent } from './data-grid/data-grid.component';
import { TabViewModule } from 'primeng/tabview';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent, DataGridComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    DxDataGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
