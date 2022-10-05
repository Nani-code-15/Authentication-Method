import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Products } from '../product/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

    
  public userData = [];
  public baseServiceUrl = '/learning'
  private _refreshrequired = new Subject<void>();

constructor(private httpClient: HttpClient) { }
  
getAll(): Observable<Products[]> {
  return this.httpClient.get<Products[]>(`${environment.apiUrl+this.baseServiceUrl}`);
}
   
getId(id: any): Observable<Products[]> {
  return this.httpClient.get<Products[]>(`${environment.apiUrl+this.baseServiceUrl}/${id}`);
 
}
submitform(e:any){
  if(e['id']){
    return this.httpClient.put<Products[]>(`${environment.apiUrl+this.baseServiceUrl}`, e);
  }
  else{
    e['id'] = 0
    return this.httpClient.post<Products[]>(`${environment.apiUrl+this.baseServiceUrl}`, e).pipe(
      tap(() => {
        this._refreshrequired.next();
      })
    );
  }
}

// SaveEmployee(inputdata: any) {
//   return this.http.post(this.apiurl, inputdata).pipe(
//     tap(() => {
//       this._refreshrequired.next();
//     })
//   );
// }

delete(id: any): Observable<Products[]> {
  return this.httpClient.delete<Products[]>(`${environment.apiUrl+this.baseServiceUrl}/${id}` );
 
}
   
}

// create(Data:Products): Observable<Products> {
//   return this.httpClient.post<Products>(`${environment.apiUrl+this.baseServiceUrl}`,Data);
// }  
// httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// }


// update(id: any): Observable<Products> {
//   return this.httpClient.put<Products>(`${environment.apiUrl+ `/car-brand`+id}`);
 
// }
// create(Data: any): Observable<Products> {
//   return this.httpClient.post<Products>(`${environment.apiUrl+this.baseServiceUrl}`,Data);
// }  

// serviceURL: string = "URL(assets/data.json,)"
//   constructor(private http: HttpClient) {}
//   getAllBrand() {

//     return this.http.get(this.serviceURL).pipe(map((response: any) => response.json()));

//   }
// }