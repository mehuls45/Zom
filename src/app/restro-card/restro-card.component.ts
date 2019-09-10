import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restro-card',
  templateUrl: './restro-card.component.html',
  styleUrls: ['./restro-card.component.css']
})
export class RestroCardComponent implements OnInit {

  @Input() name;
  @Input() location;
  @Input() type;
  @Input() id;
  @Input() img;

  @Output() send = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendData = () => {
    this.send.emit(this.id)
  }

}
