import { Component } from '@angular/core';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Restauran';
  faUtensils = faUtensils;  // Definisci l'icona come variabile

}
