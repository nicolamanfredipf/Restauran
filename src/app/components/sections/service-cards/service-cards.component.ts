import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AnimationsService } from 'src/app/service/animations.service';
import { IconsService } from 'src/app/services/icons.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-service-cards',
  templateUrl: './service-cards.component.html',
  styleUrls: ['./service-cards.component.css']
})
export class ServiceCardsComponent implements AfterViewInit{
  activeCardIndex: number = -1;
  @ViewChildren('serviceCards') serviceCards!: QueryList<ElementRef>;
  
  constructor(public iconsService:IconsService, public servicesService:ServicesService,public animationsService:AnimationsService){}
  
  setActiveCard(index:number){
    this.activeCardIndex = index;
  }
  
  ngAfterViewInit() {
    this.animationsService.animate(this.serviceCards,0,['animate__slideInUp']);
  }
}
