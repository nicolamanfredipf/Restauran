import { AnimationsService } from './../../service/animations.service';
import { Component, AfterViewInit, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about-images',
  templateUrl: './about-images.component.html',
  styleUrls: ['./about-images.component.css']
})
export class AboutImagesComponent implements AfterViewInit{
  @ViewChildren('images') imageContainer!: QueryList<ElementRef>;

  constructor(public animationsService:AnimationsService){}
  
  ngAfterViewInit(): void {
    this.animationsService.animate(this.imageContainer,0.2,['animate__fadeIn']);
 }
 
}
