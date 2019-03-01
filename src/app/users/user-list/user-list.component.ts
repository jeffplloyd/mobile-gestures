import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bs-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() data: any = [];
  isSelectable = false
  user: any = [];
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
    console.log(event);
    if(this.moveLeft[index]) {
      this.moveLeft[index] = false;
    } else {
      this.moveRight[index] = true;
    }
  }

  swipedLeft(event, index) {
    console.log(event);
    if(this.moveRight[index]) {
      this.moveRight[index] = false;
    } else {
      this.moveLeft[index] = true;
    }
  }

}
