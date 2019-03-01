import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    let apiUrl = 'https://api.myjson.com/bins/osb1i';
    return this.http.get(apiUrl);
  }
}
