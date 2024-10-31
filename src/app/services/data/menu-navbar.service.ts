import { MenuNavbar } from './../../classes/menu-navbar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuNavbarService {
  private _menuNavbarInfo : MenuNavbar[];

  constructor() {
    this._menuNavbarInfo = [
      new MenuNavbar("mug-saucer", "Popular", "Breakfast"),
      new MenuNavbar("burger", "Special", "Launch"),
      new MenuNavbar("utensils", "Lovely", "Dinner"),
    ];
   }

   get menuNavbarInfo(){
    return this._menuNavbarInfo;
   }
}
