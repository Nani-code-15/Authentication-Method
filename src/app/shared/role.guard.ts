import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  currentrole: any;
  respdata: any;
  constructor(private service: AuthService, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.IsLoggedIn()) {
      this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
      this.service.HaveAccess(this.currentrole, route.url[0].path).subscribe(result => {
        this.respdata = result;
        if (this.respdata.result == 'pass') {
          return true;
        } else {
          this.route.navigate(['']);
          alert('unauthorized access');
          return false;
        }
      });

      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }

}
