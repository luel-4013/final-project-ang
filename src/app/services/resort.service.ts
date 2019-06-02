import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResortService {
  baseUrl = 'http://localhost:4000/';

  constructor(
    private http: HttpClient,
  ) { }

  getAllAdmins() {
    console.log('BASE: ' + this.baseUrl);
    return this.http.get (`${this.baseUrl}admin`);

  }

  getAllContacts() {}

  sendContactInfo(data: object) {
    return this.http.post<any>(`${this.baseUrl}contact_us/add`, data);
  }

}
