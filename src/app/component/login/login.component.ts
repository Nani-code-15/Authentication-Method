import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageclass = ''
  message = ''
  Customerid: any;
  editdata: any;
  responsedata: any;

  constructor(private service: AuthService, private route: Router) {
    localStorage.clear();
  }
  Login = new FormGroup({
    userId: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });

  ngOnInit(): void {
  }
  ProceedLogin() {
    if (this.Login.valid) {
      this.service.ProceedLogin(this.Login.value).subscribe(result => {
        if (result != null) {
          this.responsedata = result;
          const token = this.responsedata['accessToken'];
          localStorage.setItem('token', token)
          const helper = new JwtHelperService();
          const decodedToken = helper.decodeToken(token);
          const expirationDate = helper.getTokenExpirationDate(token);
          const isExpired = helper.isTokenExpired(token);
          console.log(decodedToken);

          this.route.navigate([''])
        }

      });
    }
  }

}
