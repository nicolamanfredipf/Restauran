import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sections-headers',
  templateUrl: './sections-headers.component.html',
  styleUrls: ['./sections-headers.component.css']
})
export class SectionsHeadersComponent {
@Input("lable") lable:string = "";
@Input("title") title:string = "";
}
