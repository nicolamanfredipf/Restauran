import { HttpService } from './../../../services/http/http.service';
import { Component } from '@angular/core';
import { MenuResponse } from 'src/app/classes/responses/menu-response';

@Component({
  selector: 'app-menu-popular',
  templateUrl: './menu-popular.component.html',
  styleUrls: ['./menu-popular.component.css']
})
export class MenuPopularComponent {
  dishes:any;
  
  constructor(public httpService:HttpService){
    let response;
    httpService.getCategoryMenu("Dryck").subscribe({
      next: (content: MenuResponse) => {
        response = content;
      },
      error: (error) => {
        console.error('Error fetching menu:', error); 
      }
    });
    
    this.dishes = response;
  }
  
  onMenuChange(event:MenuResponse){
    this.dishes = event;
  }
  
}
