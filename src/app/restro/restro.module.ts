import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';

const routes: Routes = [
  {
    path: 'manage-orders',
    component: ManageOrdersComponent
  }
]


@NgModule({
  declarations: [ManageOrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RestroModule { }
