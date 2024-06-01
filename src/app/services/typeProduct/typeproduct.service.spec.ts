import { TestBed } from '@angular/core/testing';

import { TypeproductService } from './typeproduct.service';

describe('TypeproductService', () => {
  let service: TypeproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
