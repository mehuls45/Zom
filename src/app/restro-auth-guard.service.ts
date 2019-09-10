import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RestroAuthGuardService implements CanActivate{

  role;

  constructor(
    private router: Router
  ) { }

  canActivate() : boolean {

    this.role = localStorage.getItem("role")
    console.log(this.role)
    if(this.role == "restro")
      return true;
    this.router.navigateByUrl('login')
    
  }
}
