import { IconsService } from './../../../services/utils/icons.service';
import { AnimationsService } from 'src/app/services/utils/animations.service';
import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { TeamCard } from 'src/app/classes/team-card';
import { TeamCardService } from 'src/app/services/data/team-card.service';

@Component({
  selector: 'app-team-cards',
  templateUrl: './team-cards.component.html',
  styleUrls: ['./team-cards.component.css']
})
export class TeamCardsComponent implements AfterViewInit {
  @ViewChildren("teamCards") teamCards!:QueryList<ElementRef>
  @Input('numberOfCards')numberOfCards:number = this.teamCardService.teamCards.length;
  constructor(public teamCardService:TeamCardService,public animationsService:AnimationsService, public iconsService:IconsService){}
  
  ngAfterViewInit(): void {
    this.animationsService.animate(this.teamCards,0,["animate__slideInUp"])
  }
}
