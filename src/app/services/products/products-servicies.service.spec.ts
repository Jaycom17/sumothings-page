import { TestBed } from '@angular/core/testing';

import { ProductsServiciesService } from './products-servicies.service';

describe('ProductsServiciesService', () => {
  let service: ProductsServiciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
