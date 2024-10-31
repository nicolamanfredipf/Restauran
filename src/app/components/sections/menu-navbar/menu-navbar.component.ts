import { Observable } from 'rxjs';
import { HttpService } from './../../../services/http/http.service';
import { IconsService } from 'src/app/services/utils/icons.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { MenuNavbarService } from 'src/app/services/data/menu-navbar.service';
import { HttpClient } from '@angular/common/http';
import { MenuResponse } from 'src/app/classes/responses/menu-response';
@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.css']
})
export class MenuNavbarComponent {
  
  @Output() changeMenuEvent:EventEmitter<MenuResponse> = new EventEmitter<MenuResponse>();
  
  index: number = -1;

  constructor(public iconsService:IconsService, public menuNavbarService:MenuNavbarService, public httpService:HttpService){}
  
  changeMenuSection(title:string, index:number){
    let response:Observable<MenuResponse> = new Observable<MenuResponse>;
    this.index = index;
    
    switch(title){
      case "Breakfast":
      response = this.httpService.getCategoryMenu("Dryck");
      break;
      case "Launch":
      response = this.httpService.getCategoryMenu("Pizza");
      break;
      case "Dinner":
      response = this.httpService.getCategoryMenu("Tillbehör");
      break;
    }
    
    response.subscribe({
      next: (content: MenuResponse) => {
        this.changeMenuEvent.emit(content);
      },
      error: (error) => {
        console.error('Error fetching menu:', error); 
      }
    });
  }
}
