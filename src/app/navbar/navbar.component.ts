import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  role;

  constructor() { 
    this.role = localStorage.getItem("role") || null;
    console.log(this.role)
  }

  ngOnInit() {
  }

  clear() {
    localStorage.setItem("role","")
  }

}
