import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MaterialCollectionModule} from '../material.module';
import { TableFlexComponent } from './components/table-flex/table-flex.component';


import { DynamicMatTableModule } from 'dynamic-mat-table';

@NgModule({
  declarations: [
    AppComponent,
    TableFlexComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialCollectionModule,
    DynamicMatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
