import { Component, Input, OnInit } from '@angular/core';
import { MenuResponse } from 'src/app/classes/responses/menu-response';

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.css']
})
export class MenuCardsComponent implements OnInit{
  
  @Input("dishes") dishes!:MenuResponse[];
  
  constructor(){}
  
  ngOnInit(): void {
    console.log(this.dishes);
  }
  
}
