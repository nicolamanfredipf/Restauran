import { IconsService } from 'src/app/services/utils/icons.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  newsletterForm=new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required])
  });

  constructor(public iconsService:IconsService){}

  submitEmail(){
    console.log(this.newsletterForm.value);
  }
}
