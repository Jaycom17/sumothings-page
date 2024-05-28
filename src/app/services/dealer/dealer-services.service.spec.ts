import { TestBed } from '@angular/core/testing';

import { DealerServicesService } from './dealer-services.service';

describe('DealerServicesService', () => {
  let service: DealerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
