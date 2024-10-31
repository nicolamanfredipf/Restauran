import { Injectable } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBurger, faUserTie, faUtensils, faBars, faCaretDown, faCartPlus, faHeadset, faQuestion, faMugSaucer } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  private _faUtensils = faUtensils;
  private _faBars = faBars;
  private _faCaretDown = faCaretDown;
  private _faUserTie=faUserTie;
  private _faCartPlus=faCartPlus;
  private _faHeadset=faHeadset;
  private _faMugSaucer=faMugSaucer;
  private _faBurger=faBurger;
  
  constructor() { }
  
  get faUtensils(){
    return this._faUtensils;
  }
  
  get faBars (){
    return this._faBars;
  }
  
  get faCaretDown (){
    return this._faCaretDown;
  }
  
  get faUserTie(){
    return this._faUserTie;
  }
  
  get faCartPlus(){
    return this._faCartPlus;
  }
  
  get faHeadset(){
    return this._faHeadset;
  }
  
  get faMugSaucer(){
    return this._faMugSaucer;
  }
  
  get faBurger(){
    return this._faBurger;
  }
  
  getFromName(iconName:string):IconProp{
    switch(iconName){
      case faUserTie.iconName:
      return faUserTie;
      case faUtensils.iconName:
      return faUtensils;
      case faCartPlus.iconName:
      return faCartPlus;
      case faHeadset.iconName:
      return faHeadset;
      case faBurger.iconName:
      return faBurger;
      case faMugSaucer.iconName:
      return faMugSaucer;
      default:
      return faQuestion;
    }
  }
}
