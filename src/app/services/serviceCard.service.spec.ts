import { TestBed } from '@angular/core/testing';

import ServiceCardService from './serviceCard.service';

describe('ServicesService', () => {
  let service: ServiceCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
