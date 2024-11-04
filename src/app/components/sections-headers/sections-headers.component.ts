import { AnimationsService } from 'src/app/services/utils/animations.service';
import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-sections-headers',
  templateUrl: './sections-headers.component.html',
  styleUrls: ['./sections-headers.component.css']
})
export class SectionsHeadersComponent implements AfterViewInit{
  
  @Input("lable") lable:string = "";
  @Input("title") title:string = "";
  @ViewChildren('sectionHeader') sectionHeader!: QueryList<ElementRef>;
  
  constructor(public animationsService:AnimationsService){}
  
  ngAfterViewInit(): void {
    this.animationsService.animate(this.sectionHeader,0,['animate__slideInUp']);
  }
}
