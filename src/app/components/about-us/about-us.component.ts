import { AnimationsService } from 'src/app/service/animations.service';
import { IconsService } from './../../services/icons.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  yearStart0: number = 0;
  chefStart0: number = 0;

  constructor(public iconsService: IconsService,public animationsService:AnimationsService) {}

  ngOnInit(): void {
    this.animationsService.incrementAnimation(this.yearStart0, 15, (value) => this.yearStart0 = value);
    this.animationsService.incrementAnimation(this.chefStart0, 50, (value) => this.chefStart0 = value);
  }


}
