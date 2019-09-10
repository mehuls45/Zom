import { RestroService } from './../../restro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restro-list',
  templateUrl: './restro-list.component.html',
  styleUrls: ['./restro-list.component.css']
})
export class RestroListComponent implements OnInit {

  restro = [];

  constructor(private restroService: RestroService) {

    this.restro = restroService.getRestro();
   }

  ngOnInit() {
  }

}
