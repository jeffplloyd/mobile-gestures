import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
