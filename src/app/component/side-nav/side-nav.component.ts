import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  list = [
    {
      number: '1',
      name: 'Home',
      icon: 'fa-solid fa-house',
      routerLink: 'home'
    },
    {
      number: '2',
      name: 'Contact',
      icon: 'fa-solid fa-phone',
      routerLink: 'contact'
    },
    {
      number: '3',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
      routerLink: 'about'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}


