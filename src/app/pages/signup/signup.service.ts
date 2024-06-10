import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url_signup = 'http://localhost:3000/users'; 

  constructor(private http: HttpClient) { }

  signup(name: string, age: number, email: string, password: string, photo: string) {
    return this.http.post(this.url_signup, { name, age, email, password, photo }, { observe: 'response' });
  }

  logout() {
    sessionStorage.removeItem('access_token');
  }

  header() {
    const token = sessionStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }

  token() {
    const token = sessionStorage.getItem('access_token');
    return token;
  }
}