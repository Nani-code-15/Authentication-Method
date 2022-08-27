import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Products } from '../product';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  getAllProducts() {
    throw new Error('Method not implemented.');
  }

  constructor(private _http:HttpClient) { }
  getData(){
    return this._http.get("http://207.180.233.17:10003/api/v1/car-brand")
  }
  
}


// serviceURL: string = "URL(assets/data.json,)"
//   constructor(private http: HttpClient) {}
//   getAllBrand() {

//     return this.http.get(this.serviceURL).pipe(map((response: any) => response.json()));

//   }
// }