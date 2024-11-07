import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { IconsService } from 'src/app/services/utils/icons.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('navbar', { static: true }) navbar!: ElementRef;
  @Output() navbarVisibilityChange = new EventEmitter<boolean>();
  
  isContextMenuOpen: boolean = false;
  isPagesDropdownOpen: boolean = false;
  isAtTop:boolean = true; 
  isScreenLarge:boolean = window.innerWidth > 1280; 

  constructor(public iconsService:IconsService){}
  
  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // console.log(entry.isIntersecting)
          this.navbarVisibilityChange.emit(!entry.isIntersecting);
        });
      },
      {
        threshold: 0
      }
    );
    
    if (this.navbar) {
      observer.observe(this.navbar.nativeElement);
    }
  }

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
