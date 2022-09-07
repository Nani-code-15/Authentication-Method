import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  @Output()sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean= false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 SideNavToggle(){
  this.menuStatus = !this.menuStatus; 
  this.sideNavToggled.emit(this.menuStatus);
 }
  
  logout(){
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  } 
}
