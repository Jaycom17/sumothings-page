import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCrudPageComponent } from './product-crud-page.component';

describe('ProductCrudPageComponent', () => {
  let component: ProductCrudPageComponent;
  let fixture: ComponentFixture<ProductCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCrudPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
