import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeadComponent } from './head/head.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
//   { path: "", component: HomeComponent,canActivate:[AuthGuard] },
//   {
//     path: "customer", component: CustomerComponent,
//     children: [{
//       path: "", component: ListingComponent
//     },
//     { path: "create", component: AddnewComponent },
//     { path: "Edit/:id", component: AddnewComponent }
//     ],canActivate:[RoleGuard]
//   },
//   {path:"login",component:LoginComponent}

{
  path: '',component: HeadComponent, canActivate:[AuthGuard],children:[
    {
      path: '',component:HomeComponent
    },
    {
      path: 'home',component:HomeComponent
    },
    {
      path: 'about',component:AboutComponent
    },
    {
      path: 'contact',component:ContactComponent
    }
  ],
},
{
  path: 'login',component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
