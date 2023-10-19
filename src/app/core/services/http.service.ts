import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'https://dummyjson.com/';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    const url = BASE_URL + endpoint;
    return this.httpClient.get<T>(url);
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    const url = BASE_URL + endpoint;
    return this.httpClient.post<T>(url, body);
  }

  update<T>(endpoint: string, body: any): Observable<T> {
    const url = BASE_URL + endpoint;
    return this.httpClient.put<T>(url, body);
  }

  delete<T>(endpoint: string): Observable<T> {
    const url = BASE_URL + endpoint;
    return this.httpClient.delete<T>(url);
  }
}
