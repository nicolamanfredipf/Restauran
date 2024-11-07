import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restauran';
  
  topButtonvisibility:boolean = false;
  navOnTop:boolean = true;
  
  manageTopButton(visibility:boolean){
      this.topButtonvisibility = visibility;
  }

  manageNavbar(navIsAtTop:boolean){
    console.log(navIsAtTop)
    this.navOnTop = navIsAtTop;
  }

}
