import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { IconsService } from 'src/app/services/utils/icons.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;
  
  isContextMenuOpen: boolean = false;
  isPagesDropdownOpen: boolean = false;
  isAtTop:boolean = true; 
  isScreenLarge:boolean = window.innerWidth > 1280; 

  constructor(public iconsService:IconsService){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isAtTop = window.scrollY === 0;
  }  

  @HostListener('window:resize', [])
  onWindowResize() {
    if(this.isScreenLarge){
      this.isContextMenuOpen = true;
    }else{
      this.isContextMenuOpen = false;

    }
  }
  
  toggleMenu(){
    this.isContextMenuOpen = !this.isContextMenuOpen;
  }
  
  togglePagesDropdown(){
    this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
  }
}
