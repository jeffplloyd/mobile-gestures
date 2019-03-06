import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [MyLibComponent, AlertComponent],
  imports: [
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
