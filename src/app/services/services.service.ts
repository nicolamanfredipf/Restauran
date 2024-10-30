import { Injectable } from '@angular/core';
import { ServiceCard } from '../classes/service-card';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _serviceCards: ServiceCard[];
  
  constructor() {
    this._serviceCards = [
      new ServiceCard("user-tie", "Master Chefs", "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"),
      new ServiceCard("utensils", "Quality Food", "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"),
      new ServiceCard("cart-plus", "Online Order", "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"),
      new ServiceCard("headset", "24/7 Service", "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"),
      new ServiceCard("user-tie", "Master Chefs", "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"),
      new ServiceCard("utensils", "Quality Food", "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"),
      new ServiceCard("cart-plus", "Online Order", "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"),
      new ServiceCard("headset", "24/7 Service", "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"),
       ]
  }

  get serviceCards(){
    return this._serviceCards;
  }
}
