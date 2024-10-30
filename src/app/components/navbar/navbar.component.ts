import { Component } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isContextMenuOpen: boolean = false;
  isPagesDropdownOpen: boolean = false;

  constructor(public iconsService:IconsService){}

  
  toggleMenu(){
    this.isContextMenuOpen = !this.isContextMenuOpen;
  }

  togglePagesDropdown(){
    this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
  }
}
