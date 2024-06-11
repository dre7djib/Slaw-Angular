import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../pages/login/login.service';
import { User } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, private loginService:LoginService) { }


  url = "http://localhost:3000/users";


  getUsers() {
    const headers = this.loginService.header();
    return this.http.get<User>(this.url, { headers });
  }
}

