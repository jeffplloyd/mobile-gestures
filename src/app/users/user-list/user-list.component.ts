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
  public userSelect: any = {};
  moveRight: Array<boolean> = [];
  moveLeft: Array<boolean> = [];
  
  constructor() { }

  ngOnInit() {

  }

  selectToggle(event, index) {
    this.isSelectable = !this.isSelectable;
    if(this.isSelectable) {
      this.moveRight[index] = false;
      this.moveLeft[index] = false;
      this.selectUser(this.isSelectable, index)
    } else {
      this.cancelSelect();
    }
  }

  selectUser(event, index) {
    this.userSelect[index] = event;
  }

  cancelSelect() {
    this.isSelectable = false;
    Object.keys(this.userSelect).forEach((key) => {
      this.userSelect[key] = false;
    });
  }

  swipedRight(event, index) {
    if(!this.isSelectable) {
      if(this.moveLeft[index]) {
        this.moveLeft[index] = false;
      } else {
        this.moveRight[index] = true;
      }
    }
  }

  swipedLeft(event, index) {
    if(!this.isSelectable) {
      if(this.moveRight[index]) {
        this.moveRight[index] = false;
      } else {
        this.moveLeft[index] = true;
      }
    }
  }

}
