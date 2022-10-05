import { ThisReceiver } from '@angular/compiler';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit,DoCheck {
  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-gauge',
      routerLink: 'dashboard'
      
    },
    {
      number: '2',
      name: 'Home',
      icon: 'fa-solid fa-house',
      routerLink: 'home'
      
    },
    {
      number: '3',
      name: 'Contact',
      icon: 'fa-solid fa-phone',
      routerLink: 'contact'
    },
    {
      number: '4',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
      routerLink: 'about'
    },

  ]
 
  displaymenu = false;
  displayabout = false;
  displayhome = false;
  currentrole: any;
  menulist$: any;
  constructor(private service: AuthService, private route: Router) { }


  ngOnInit(): void {
    this.service.updatemenu.subscribe(res => {
      this.MenuDisplay();
      this.LoadMenu();
    });
    this.MenuDisplay();
    this.LoadMenu();
  }
  ngDoCheck(): void {
    if (this.route.url == '/login') {
      this.displaymenu = false
    } else {
      this.displaymenu = true
    }
  }
  MenuDisplay() {
    if (this.service.GetToken() != '') {
      this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
      this.displayhome = this.currentrole == 'admin';
      this.displayabout = (this.currentrole == 'admin' || this.currentrole == 'user')
    }
  }

  LoadMenu() {
    if (this.service.GetToken() != '') {
      this.currentrole = this.service.GetRolebyToken(this.service.GetToken());
      this.service.GetMenubyrole(this.currentrole).subscribe(result => {
        this.menulist$ = result;
      });
    }
  }
}


