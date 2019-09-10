import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestroListComponent } from './restro-list/restro-list.component';

const routes: Routes = [
  {
    path: 'restro-list',
    component: RestroListComponent
  }
]

@NgModule({
  declarations: [RestroListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
