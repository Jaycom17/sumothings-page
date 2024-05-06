import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryShoppingPageComponent } from './inventory-shopping-page.component';

describe('InventoryShoppingPageComponent', () => {
  let component: InventoryShoppingPageComponent;
  let fixture: ComponentFixture<InventoryShoppingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryShoppingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryShoppingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
