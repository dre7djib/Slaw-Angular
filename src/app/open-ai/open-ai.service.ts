import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  url = 'http://localhost:3000/open-ai';

  constructor(private http: HttpClient, private loginService:LoginService) { }

  getResponse(text: string): Observable<any> {
    const headers = this.loginService.token(); 
    return this.http.post(this.url, { text, headers });
  }
}