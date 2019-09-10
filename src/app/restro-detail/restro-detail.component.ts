import { RestroService } from './../restro.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restro-detail',
  templateUrl: './restro-detail.component.html',
  styleUrls: ['./restro-detail.component.css']
})
export class RestroDetailComponent implements OnInit {

  restro = [];
  id;

  constructor(
    private route: ActivatedRoute,
    private restroService: RestroService
    ) { 

    this.route.params.subscribe(x => {
      this.id = x.id;
      this.restro = restroService.getRestro();

    });
  }

  ngOnInit() {
  }



}
