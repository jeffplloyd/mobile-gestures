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
  
  constructor() { }

  ngOnInit() {
  }

  selectMe(event) {
    this.isSelectable = true;
  }

  cancelSelect() {
    this.isSelectable = false;
  }

}
