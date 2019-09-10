import { FormsModule } from '@angular/forms';
import { RestroService } from './../restro.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restro = [];
  restroType = [];
  filterTerm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private restroService: RestroService
    ) { 

    this.restro = restroService.getRestro();
    this.restroType = restroService.getRestroType();
  }

  ngOnInit() {
  }

  navigate(x) {
    this.router.navigate(['restro-detail',x])
  }

  setItem(term) {
    this.filterTerm = term;
  }

}
