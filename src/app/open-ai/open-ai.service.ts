import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  url = 'http://localhost:3000/open-ai';

  constructor(private http: HttpClient) { }

  getResponse(text: string): Observable<any> {
    return this.http.post(this.url, { text });
  }
}