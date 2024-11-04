import { IconsService } from 'src/app/services/utils/icons.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-video',
  templateUrl: './booking-video.component.html',
  styleUrls: ['./booking-video.component.css']
})
export class BookingVideoComponent {

  constructor(public iconsService:IconsService){}

}
