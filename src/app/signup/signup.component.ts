import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage = null;

  loginForm = new FormGroup(
    {
      name: new FormControl("",[Validators.required]),
      username: new FormControl("",[Validators.required, Validators.minLength(6)]),
      email: new FormControl("",[Validators.required, Validators.email]),
      password: new FormControl("",[Validators.required, Validators.minLength(6)]),
      cpassword: new FormControl("",[Validators.required, Validators.minLength(6)]),
      state: new FormControl("",[Validators.required]),
      city: new FormControl("",[Validators.required]),
      pincode: new FormControl("",[Validators.required])
    }
  );

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {

    if(this.loginForm.value.password != this.loginForm.value.cpassword) {
      this.errorMessage = "Passwords Do Not Match";
    }
    else {
      this.errorMessage = null;
      this.router.navigateByUrl('login')
      console.log(this.loginForm.value)

    }
    
  }

  clear() {
    this.loginForm.reset();
    this.errorMessage = null; 
  }

}
