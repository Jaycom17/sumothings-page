import { TestBed } from '@angular/core/testing';

import { ShoppingCarServiceService } from './shopping-car-service.service';

describe('ShoppingCarServiceService', () => {
  let service: ShoppingCarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
