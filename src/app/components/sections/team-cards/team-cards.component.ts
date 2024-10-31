import { AnimationsService } from 'src/app/service/animations.service';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { TeamCard } from 'src/app/classes/team-card';
import { TeamCardService } from 'src/app/services/team-card.service';

@Component({
  selector: 'app-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.css']
})
export class TeamCardsComponent implements AfterViewInit {
  @ViewChildren("teamCards") teamCards!:QueryList<ElementRef>

  constructor(public teamCardService:TeamCardService,public animationsService:AnimationsService){}
  
  ngAfterViewInit(): void {
    this.animationsService.animate(this.teamCards,0,["animate__slideInUp"])
  }
}
