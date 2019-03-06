import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger(
      'expand', [
        transition(':enter', [
          style({height: "0", overflow: "hidden"}),
          animate('500ms ease-in-out', style({height: "*", overflow: "visible"}))
        ]),
        transition(':leave', [
          style({height: "*", overflow: "visible"}),
          animate('500ms ease-in-out', style({height: "0", overflow: "hidden"}))
        ])
      ]
    )
  ]
})
export class AlertComponent implements OnInit {
  @Input() alertClass: string = 'alert-success'
  @Input() dismissable: boolean = false;
  show: boolean = true;

  constructor() { }

  ngOnInit() {
    if(this.dismissable) {
      this.alertClass = `${this.alertClass} alert-dismissible fade show`;
    }
  }

}
