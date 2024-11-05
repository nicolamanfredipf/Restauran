import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonailsCardsComponent } from './testimonails-cards.component';

describe('TestimonailsCardsComponent', () => {
  let component: TestimonailsCardsComponent;
  let fixture: ComponentFixture<TestimonailsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonailsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonailsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
