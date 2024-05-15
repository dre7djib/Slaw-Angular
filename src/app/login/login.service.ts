import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.url, { email, password }, { observe: 'response' })
      .subscribe((res: any) => sessionStorage.setItem('access_token', res.body.access_token));
  }

  logout() {
    sessionStorage.removeItem('access_token');
  }

  header() {
    const token = sessionStorage.getItem('access_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }
}
