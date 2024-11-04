import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationsService } from 'src/app/services/utils/animations.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements AfterViewInit{
  @ViewChildren('formSection') formSection!:QueryList<ElementRef>;
  
  contactForm:FormGroup;
  
  constructor(public animationsService:AnimationsService){
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }
  
  ngAfterViewInit(): void {
    console.log("source: " ,this.formSection.map((v) => v.nativeElement));

    this.animationsService.animate(this.formSection, 0, ['animate__slideInUp']);
  }
  
  onSubmit(){
    console.log(this.contactForm.value);
  }
}
