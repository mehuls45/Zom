import { OrdersService } from './../../orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orders = [];

  constructor(
    private ordersService: OrdersService
  ) { 
      this.orders = ordersService.getOrders();
      console.log(this.orders)
  }

  ngOnInit() {
  }

}
