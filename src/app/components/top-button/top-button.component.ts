import { AnimationsService } from './../../services/utils/animations.service';
import { IconsService } from './../../services/utils/icons.service';
import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.css']
})
export class TopButtonComponent implements AfterViewInit {
  @ViewChildren('topButton') topButton!:QueryList<ElementRef>;

  isOnTop:boolean = window.scrollY === 0;
  
  constructor(public iconsService:IconsService, public animationsService:AnimationsService){}
  
  ngAfterViewInit(): void {
    this.topButton.forEach((element) => {
      const nativeElement = element.nativeElement;
      nativeElement.classList.remove('animate__animated', 'animate__fadeOut');
      nativeElement.classList.add('animate__animated','animate__fadeIn');
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isOnTop = window.scrollY === 0;
  }

  goTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
