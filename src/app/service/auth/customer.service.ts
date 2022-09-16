// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
// import { environment } from 'src/environments/environment';
// @Injectable({
//   providedIn: 'root'
// })
// export class CustomerService {
//   apiurl = 'https://207.180.233.17:20003/api/v1/auth/customer';
//   constructor(private http: HttpClient) {

//   }

//   LoadCustomer() {
//     return this.http.get(this.apiurl);
//   }
//   SaveCustomer(customedata: any) {
//     return this.http.post(this.apiurl, customedata);
//   }
//   LoadCustomerbycode(id: any) {
//     return this.http.get(this.apiurl + '/' + id);
//   }
//   RemoveCustomer(id: any) {
//     return this.http.delete(this.apiurl + '/' + id);
//   }

