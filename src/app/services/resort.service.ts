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
  sendRegisterationInfo(data: object) {
    return this.http.post<any>(`${this.baseUrl}registers/add`, data); }


  registerUsers(firstname, secondname, username, phonenumber, email, gender, password, country, city, lifeStatus) {
    const register = {
      firstname: firstname,
      secondname: secondname,
      username: username,
      phonenumber: phonenumber,
      email: email,
      gender: gender,
      password: password,
      country: country,
      city: city,
      lifeStatus: lifeStatus
    };
    return this.http.post(`${this.baseUrl}registers/add`, register);


    //add some funs jstincs
  }
  sendLogin(data:object){
    return this.http.post<any>(`${this.baseUrl}logins/add`, data);
  }

  registerLogin(email, password){
    const login = {
      email: email,
      password: password
    };
    return this.http.post(`${this.baseUrl}logins/add`, login)
  }

}
