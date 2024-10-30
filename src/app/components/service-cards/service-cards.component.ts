import { Component } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.css']
})
export class ServiceCardsComponent {
  activeCardIndex: number = -1;

  constructor(public iconsService:IconsService, public servicesService:ServicesService){}

  setActiveCard(index:number){
    this.activeCardIndex = index;
  }
}
