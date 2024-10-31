import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPopularComponent } from './menu-popular.component';

describe('MenuPopularComponent', () => {
  let component: MenuPopularComponent;
  let fixture: ComponentFixture<MenuPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPopularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
