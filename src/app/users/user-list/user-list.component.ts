import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'bs-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger(
      'expand', [
        transition(':enter', [
          style({height: "0", overflow: "hidden"}),
          animate('250ms ease-in-out', style({height: "*", overflow: "visible"}))
        ]),
        transition(':leave', [
          style({height: "*", overflow: "visible"}),
          animate('250ms ease-in-out', style({height: "0", overflow: "hidden"}))
        ])
      ]
    )
  ],
})
export class UserListComponent implements OnInit {
  @Input() data: any = [];
  isSelectable = false
  user: any = {};
  moveRight: Array<boolean> = [];
  moveLeft: Array<boolean> = [];
  
  constructor() { }

  ngOnInit() {
  }

  selectMe(event) {
    this.isSelectable = true;
  }

  cancelSelect() {
    this.isSelectable = false;
  }

  swipedRight(event, index) {
    if(!this.user[index]) {
      if(this.moveLeft[index]) {
        this.moveLeft[index] = false;
      } else {
        this.moveRight[index] = true;
      }
    }
  }

  swipedLeft(event, index) {
    if(!this.user[index]) {
      if(this.moveRight[index]) {
        this.moveRight[index] = false;
      } else {
        this.moveLeft[index] = true;
      }
    }
  }

}
