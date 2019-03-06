import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MyLibComponent } from './my-lib.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [MyLibComponent, AlertComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [MyLibComponent, AlertComponent]
})
export class MyLibModule { }
