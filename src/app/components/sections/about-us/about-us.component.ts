import { AnimationsService } from 'src/app/services/utils/animations.service';
import { IconsService } from '../../../services/utils/icons.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit{
  @ViewChildren("counters") counters!:QueryList<ElementRef>;
  yearStart0: number = 0;
  chefStart0: number = 0;
  
  constructor(public iconsService: IconsService,public animationsService:AnimationsService) {}
  
  ngAfterViewInit(): void {
    this.animationsService.incrementAnimation(this.counters, this.yearStart0, 15, (value) => this.yearStart0 = value);
    this.animationsService.incrementAnimation(this.counters, this.chefStart0, 50, (value) => this.chefStart0 = value);
  }
}
