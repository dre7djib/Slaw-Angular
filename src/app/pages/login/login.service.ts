import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url_login = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient,private router: Router) { }

  login(email: string, password: string) {
    return this.http.post(this.url_login, { email, password }, { observe: 'response' })
      .subscribe((res: any) => {
        sessionStorage.setItem('access_token', res.body.access_token);
        this.router.navigate(['/home']);
      });
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
