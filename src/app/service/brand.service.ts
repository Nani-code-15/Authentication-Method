import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe } from 'rxjs';
import { Products } from '../product/products';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
    
  public userData = [];
  public baseServiceUrl = '/car-brand'
 
// httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// }


constructor(private httpClient: HttpClient) { }
  
getAll(): Observable<Products[]> {
  return this.httpClient.get<any[]>(`${environment.apiUrl}/car-brand`);
}
  
create(carbrandData: any): Observable<Products> {
  return this.httpClient.post<Products>(environment.apiUrl +'/car-brand', carbrandData);
}  
  
find(id: any): Observable<Products> {
  return this.httpClient.get<Products>(`${environment.apiUrl+ `/car-brand`+id}`);
 
}
  
// update(id: any): Observable<Products> {
//   return this.httpClient.put<Products>(`${environment.apiUrl+ `/car-brand`+id}`);
 
// }
  
delete(id: any): Observable<Products> {
  return this.httpClient.delete<Products>(`${environment.apiUrl+ `/car-brand`+id}`);
 
}
   
}



// serviceURL: string = "URL(assets/data.json,)"
//   constructor(private http: HttpClient) {}
//   getAllBrand() {

//     return this.http.get(this.serviceURL).pipe(map((response: any) => response.json()));

//   }
// }