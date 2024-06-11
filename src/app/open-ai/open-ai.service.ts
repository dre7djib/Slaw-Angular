import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../pages/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  url = 'http://172.16.234.32:3000/open-ai/response';

  constructor(private http: HttpClient, private loginService:LoginService) { }
  getResponse(text: string, thread:string): Observable<any> {
    const headers = this.loginService.header();
    return this.http.post(this.url, { text, thread }, { headers });
  }

  getThreads( thread_id: string): Observable<any> {
    const headers = this.loginService.header();
    return this.http.get(`http://172.16.234.32:3000/open-ai/thread/${thread_id}/messages`, { headers });
  }

  getThreadsList(): Observable<any> {
    const headers = this.loginService.header();
    return this.http.get(`http://172.16.234.32:3000/open-ai/threads/list`, { headers });
  }
}