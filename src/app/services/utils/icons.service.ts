import { Injectable } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight, faArrowUp, faXmark, faQuoteLeft, faPlay, faEnvelopeOpen, faBurger, faUserTie, faUtensils, faBars, faCaretDown, faCartPlus, faHeadset, faQuestion, faMugSaucer,  faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

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
  private _faEnvelopeOpen=faEnvelopeOpen;
  private _faPlay=faPlay;
  private _faQuoteLeft=faQuoteLeft;
  private _faXmark=faXmark;
  private _faArrowUp=faArrowUp;
  private _faAngleRight=faAngleRight;
  private _faInstagram=faInstagram;
  private _faXTwitter=faXTwitter;
  private _faYoutube=faYoutube;
  private _faLinkedin=faLinkedin;
  private _faEnvelope=faEnvelope;
  private _faPhone=faPhone;
  private _faLocationDot=faLocationDot;
  private _faCopyright=faCopyright;

  
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

  get faEnvelopeOpen(){
    return this._faEnvelopeOpen;
  }
  
  get faPlay(){
    return this._faPlay;
  }

  get faQuoteLeft(){
    return this._faQuoteLeft;
  }

  get faXmark(){
    return this._faXmark;
  }
  
  get faArrowUp(){
    return this._faArrowUp;
  }
  
  get faLinkedin(){
    return this._faLinkedin;
  }
  
  get faInstagram(){
    return this._faInstagram;
  }
  
  get faYoutube(){
    return this._faYoutube;
  }
  
  get faXTwitter(){
    return this._faXTwitter;
  }
  
  get faAngleRight(){
    return this._faAngleRight;
  }

  get faLocationDot(){
    return this._faLocationDot;
  }
  
  get faPhone(){
    return this._faPhone;
  }
  
  get faEnvelope(){
    return this._faEnvelope;
  }
  
  get faCopyright(){
    return this._faCopyright;
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
