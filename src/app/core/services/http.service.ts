import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://dummyjson.com/';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private httpClient: HttpClient){}

    get(endpoint: string) {
        const url = BASE_URL + endpoint;
        return this.httpClient.get<any>(url);
    }

    post(endpoint: string, body: any) {
        const url = BASE_URL + endpoint;
        return this.httpClient.post<any>(url, body);
    }

    update(endpoint: string, body: any) {
        const url = BASE_URL + endpoint;
        return this.httpClient.put(url, body);
    }

    delete(endpoint: string) {
        const url = BASE_URL + endpoint;
        return this.httpClient.delete(url);
    }

}