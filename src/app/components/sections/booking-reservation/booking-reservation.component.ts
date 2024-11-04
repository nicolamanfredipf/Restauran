import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-reservation',
  templateUrl: './booking-reservation.component.html',
  styleUrls: ['./booking-reservation.component.css']
})
export class BookingReservationComponent {

  reservationForm:FormGroup;

  constructor(){
    this.reservationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dt: new FormControl('', [Validators.required]),
      guests: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    console.log(this.reservationForm.value);
  }

}
