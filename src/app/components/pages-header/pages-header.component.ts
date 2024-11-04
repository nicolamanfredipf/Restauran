import { AnimationsService } from 'src/app/services/utils/animations.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.css']
})
export class PagesHeaderComponent implements AfterViewInit{
  @Input("title") title:string="";
  @ViewChildren('titleRef') titleRef!:QueryList<ElementRef>;
  endpoint:string;
  
  constructor(router: Router, public animationsService:AnimationsService){
    this.endpoint = router.url.replace('/','').toUpperCase();
  }

  ngAfterViewInit(): void {
    this.animationsService.animate(this.titleRef,0,['animate__slideInDown'])
  }
  
}
