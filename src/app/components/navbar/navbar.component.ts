import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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

  constructor(public iconsService:IconsService){}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
      console.log(entry.isIntersecting)

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

  
  toggleMenu(){
    this.isContextMenuOpen = !this.isContextMenuOpen;
  }

  togglePagesDropdown(){
    this.isPagesDropdownOpen = !this.isPagesDropdownOpen;
  }
}
