import { AnimationsService } from './../../../services/utils/animations.service';
import { IconsService } from './../../../services/utils/icons.service';
import { Review } from 'src/app/classes/responses/review';
import { HttpService } from './../../../services/http/http.service';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-testimonails-cards',
  templateUrl: './testimonails-cards.component.html',
  styleUrls: ['./testimonails-cards.component.css']
})
export class TestimonailsCardsComponent implements OnInit, AfterViewInit{
  @ViewChildren('testimonials') testimonials!:QueryList<ElementRef>;
  @ViewChildren('card') card!:QueryList<ElementRef>;
  
  reviews!:Review[];
  review:Review = new Review(-1,'','','');
  oldIndex:number=0;
  
  constructor(public httpService:HttpService, public iconsService:IconsService, public animationsService:AnimationsService){}
  
  ngOnInit(): void {
    this.httpService.getTestimonails().subscribe({
      next: (reviews) => {
        this.reviews = reviews;
        this.review = reviews[0];
        // console.log('Recensioni ricevute:', this.reviews);
      },
      error: (error) => {
        console.error('Errore durante la richiesta:', error);
      },
      complete: () => {
        // console.log('La richiesta è completata con successo.');
      }
    });
  }

  ngAfterViewInit(): void {
    this.animationsService.animate(this.testimonials,0,['animate__slideInUp'])
  }
  
  selectCard(newRev:Review, index:number){
    this.reviews.forEach(rev => {
      if(rev.id() === newRev.id()){
        if(this.oldIndex < index){
          // console.log('card:',this.card)
          console.log('if')
          this.animationsService.animateCarousel(this.card,['animate__slideInLeft']);
        }else{
          console.log('else')
          this.animationsService.animateCarousel(this.card,['animate__slideInRight']);
          // console.log('card:',this.card)
        }
        this.review = rev;
      }
    });
    this.oldIndex = index;
  }  
}
