import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryProductPageComponent } from './inventory-product-page.component';

describe('InventoryProductPageComponent', () => {
  let component: InventoryProductPageComponent;
  let fixture: ComponentFixture<InventoryProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryProductPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
