import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
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
  
  constructor(public iconsService:IconsService, public servicesService:ServicesService){}
  
  setActiveCard(index:number){
    this.activeCardIndex = index;
  }
  
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated');
          entry.target.classList.add('animate__slideInUp');
          observer.unobserve(entry.target);
        }
      });
    });
    
    this.serviceCards.forEach((card) => observer.observe(card.nativeElement));
  }
}
