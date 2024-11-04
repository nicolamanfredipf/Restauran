import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectionsHeadersComponent } from './subsections-headers.component';

describe('SubsectionsHeadersComponent', () => {
  let component: SubsectionsHeadersComponent;
  let fixture: ComponentFixture<SubsectionsHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsectionsHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsectionsHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
