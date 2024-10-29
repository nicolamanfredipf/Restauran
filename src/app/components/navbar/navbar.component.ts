import { Component } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faUtensils = faUtensils;
  faBars = faBars;
  isContextMenuOpen: boolean = false;
  
  toggleMenu(){
    this.isContextMenuOpen = !this.isContextMenuOpen;
  }
}
