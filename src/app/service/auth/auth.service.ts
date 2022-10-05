// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class  AuthService {
  public baseServiceUrl = '/auth/login'


  constructor(private http: HttpClient, private router: Router) { }

  tokenresp: any;
  private _updatemenu = new Subject<void>();
  get updatemenu() {
    return this._updatemenu;
  }

  ProceedLogin(UserCred:any){
         return this.http.post(`${environment.apiUrl+this.baseServiceUrl}`,UserCred);
       }

  GenerateRefreshToken() {
    let input = {
      "jwtToken": this.GetToken(),
      "refreshToken": this.GetRefreshToken()
    }
    return this.http.post(`${environment.apiUrl + 'refresh'}`, input);
  }

  IsLoggedIn() {
    return localStorage.getItem("token") != null;
  }
  GetToken() {
    return localStorage.getItem("token") || '';
  }
  GetRefreshToken() {
    return localStorage.getItem("refreshtoken") || '';
  }

  SaveTokens(tokendata: any) {
    localStorage.setItem('token', tokendata.jwtToken);
    localStorage.setItem('refreshtoken', tokendata.refreshToken);
  }

  Logout() {
    alert('Your session expired')
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  GetRolebyToken(token: any) {
    let _token = token.split('.')[1];
    this.tokenresp = JSON.parse(atob(_token))
    return this.tokenresp.role;
  }

  GetMenubyrole(id: any) {
    return this.http.get(`${environment.apiUrl}/role-master-prm/` + id);
  }
  HaveAccess(role: any, menu: any) {
    return this.http.get(`${environment.apiUrl + 'HaveAccess?role=' + role + '&menu=' + menu}`);
  }

}

//   helper=new JwtHelperService();
//   public baseServiceUrl = '/auth/login'
//   constructor(private http:HttpClient) {

//    }
//    ProceedLogin(UserCred:any){
//      return this.http.post(`${environment.apiUrl+this.baseServiceUrl}`,UserCred);
//    }
//   //  getAll(): Observable<Products[]> {
//   //   return this.httpClient.get<Products[]>(`${environment.apiUrl+this.baseServiceUrl}`);
//   // }
//    IsLoggedIn(){
//      return localStorage.getItem('token')!=null;
//    }
//    GetToken(){
//     return localStorage.getItem('token')||'';
//    }
//    HaveAccess(){
//      var loggintoken=localStorage.getItem('token')||'';
//      var _extractedtoken=loggintoken.split('.')[1];
//      var _atobdata=atob(_extractedtoken);
//      var _finaldata=JSON.parse(_atobdata);
//      if(_finaldata.role=='admin'){
//        return true
//      }else{
//        alert('you not having access');
//        return false
//      }
//    }
// }