import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeadComponent } from './component/head/head.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';
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
    },
    { 
      path: 'view', component: ViewComponent
     },
    {
       path: 'post/create', component: CreateComponent
    },
    { 
      path: 'edit/:id', component: EditComponent 
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
