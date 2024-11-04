import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingVideoComponent } from './booking-video.component';

describe('BookingVideoComponent', () => {
  let component: BookingVideoComponent;
  let fixture: ComponentFixture<BookingVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
