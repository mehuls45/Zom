import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestroService {

  restro = [];
  restroType = [];

  constructor() { }

  getRestroType() {

    this.restroType = [
      'Italian',
      'North Indian',
      'Chinese',
      'Seafood'
    ];

    return this.restroType;
  }

  getRestro() {

    this.restro = [
      { 
        "id": "1",
        "img": "1.jpg",
        "name": "The Long Bar",
        "location": "Wakad, Pune",
        "type": "Italian"
      },
      { 
        "id": "2",
        "img": "2.jpg",
        "name": "Maratheshahi",
        "location": "Kharadi, Pune",
        "type": "North Indian"
      },
      {
        "id": "3",
        "img": "3.jpg",
        "name": "Planet 9",
        "location": "Bavdhan, Pune",
        "type": "North Indian"
      },
      {
        "id": "4",
        "img": "4.jpg",
        "name": "Gaarva Biryani",
        "location": "Kothrud, Pune",
        "type": "North Indian"
      },
      {
        "id": "5",
        "img": "5.jpg",
        "name": "The Sea Secret",
        "location": "JM Road, Pune",
        "type": "Seafood"
      },
      {
        "id": "6",
        "img": "6.jpg",
        "name": "Flavaro'so",
        "location": "Viman Nagar, Pune",
        "type": "Seafood"
      },
      {
        "id": "7",
        "img": "7.jpg",
        "name": "Chili's American Grill & Bar",
        "location": "Viman Nagar, Pune",
        "type": "Seafood"
      },
      {
        "id": "8",
        "img": "8.jpg",
        "name": "Wings & Co",
        "location": "Viman Nagar, Pune",
        "type": "Chinese"
      },
      {
        "id": "9",
        "img": "4.jpg",
        "name": "Coconut Tree Bar",
        "location": "Magarpatta, Pune",
        "type": "Seafood"
      },
      {
        "id": "10",
        "img": "10.jpg",
        "name": "Autobahn",
        "location": "Viman Nagar, Pune",
        "type": "Chinese"
      },
      {
        "id": "11",
        "img": "11.jpg",
        "name": "Zeta",
        "location": "Nagar Road,Pune",
        "type": "Italian"
      },
      {
        "id": "12",
        "img": "2.jpg",
        "name": "Le Plaisir ",
        "location": "Deccan, Pune",
        "type": "Italian"
      },
    
    ];

    return this.restro;
  }
}
