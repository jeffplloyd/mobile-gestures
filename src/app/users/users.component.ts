import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private usersSvc: UsersService) { }

  ngOnInit() {
    this.usersSvc.getUsers().subscribe((response: any) => {
      this.users = response;
    });
  }

}
