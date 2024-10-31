import { Component, Input } from '@angular/core';
import { MenuResponse } from 'src/app/classes/responses/menu-response';

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.css']
})
export class MenuCardsComponent {

  @Input("dishes") dishes!:MenuResponse;

}
