import { TestBed } from '@angular/core/testing';

import { MenuNavbarService } from './menu-navbar.service';

describe('MenuNavbarService', () => {
  let service: MenuNavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuNavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
