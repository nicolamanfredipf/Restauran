import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subsections-headers',
  templateUrl: './subsections-headers.component.html',
  styleUrls: ['./subsections-headers.component.css']
})
export class SubsectionsHeadersComponent {

  @Input('title') title:string = '';

}
