import { Component } from '@angular/core';
import { IconsService } from 'src/app/services/utils/icons.service';

@Component({
  selector: 'app-contact-emails',
  templateUrl: './contact-emails.component.html',
  styleUrls: ['./contact-emails.component.css']
})
export class ContactEmailsComponent {

  constructor(public iconsService:IconsService){}
}
