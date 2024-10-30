import { Router, RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pages-header',
  templateUrl: './pages-header.component.html',
  styleUrls: ['./pages-header.component.css']
})
export class PagesHeaderComponent {
  endpoint:string;

  constructor(router: Router){
    this.endpoint = router.url.replace('/','').toUpperCase();
  }

}
