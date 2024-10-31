import { IconsService } from 'src/app/services/utils/icons.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.css']
})
export class MenuNavbarComponent {

  constructor(public iconsService:IconsService){}
}
