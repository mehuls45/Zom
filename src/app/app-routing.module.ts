import { AdminAuthGuardService } from './admin-auth-guard.service';
import { RestroAuthGuardService } from './restro-auth-guard.service';
import { RestroDetailComponent } from './restro-detail/restro-detail.component';
import { RestroModule } from './restro/restro.module';
import { AdminModule } from './admin/admin.module';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'restro-detail/:id',
    component: RestroDetailComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AdminAuthGuardService]
  },
  {
    path: 'restro',
    loadChildren: './restro/restro.module#RestroModule',
    canActivate: [RestroAuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
