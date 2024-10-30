import { Component } from '@angular/core';
import { faUtensils, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faUtensils = faUtensils;
  faBars = faBars;
  faCaretDown = faCaretDown;
  isContextMenuOpen: boolean = false;
  isPagesDropdownOpen: boolean = false;
  
  toggleMenu(){
    this.isContextMenuOpen = !this.isContextMenuOpen;
  }

  togglePagesDropdown(){
    this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
  }
}
