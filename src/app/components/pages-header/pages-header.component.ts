import { Router, RouterModule, Routes } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.css']
})
export class PagesHeaderComponent {
  @Input("title") title:string="";
  
  endpoint:string;
  
  constructor(router: Router){
    this.endpoint = router.url.replace('/','').toUpperCase();
  }
  
}
