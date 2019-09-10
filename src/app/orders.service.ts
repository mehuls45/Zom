import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders = [];

  constructor() { }

  getOrders() {

    this.orders = [
      {
        "id": "1",
        "name": "Mehul",
        "food": "Dosa",
        "location": "Pune",
        "amount": "150"
      },
      {
        "id": "2",
        "name": "Aayush",
        "food": "Sandwich",
        "location": "Akurdi",
        "amount": "100"
      },
      {
        "id": "3",
        "name": "Kumbhar",
        "food": "Pav Bhaji",
        "location": "Wakad",
        "amount": "120"
      },
    ];

    return this.orders;
  }
}
