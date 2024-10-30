import { Injectable } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUserTie, faUtensils, faBars, faCaretDown, faCartPlus, faHeadset, faQuestion } from '@fortawesome/free-solid-svg-icons';

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
  
  getFromName(iconName:string):IconProp{
    console.log(iconName)
    console.log(faUserTie.iconName)

    switch(iconName){
      case faUserTie.iconName:
      return faUserTie;
      case faUtensils.iconName:
      return faUtensils;
      case faCartPlus.iconName:
      return faCartPlus;
      case faHeadset.iconName:
      return faHeadset;
      default:
      return faQuestion;
    }
  }
}
