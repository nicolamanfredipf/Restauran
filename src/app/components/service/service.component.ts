import { ServicesService } from 'src/app/services/services.service';
import { IconsService } from './../../services/icons.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  
  activeCardIndex: number = -1;
  
  constructor(public iconsService:IconsService, public servicesService:ServicesService){}
  
  setActiveCard(index:number){
    this.activeCardIndex = index;
  }
}
