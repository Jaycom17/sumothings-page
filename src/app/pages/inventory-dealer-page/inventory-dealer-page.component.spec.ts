import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDealerPageComponent } from './inventory-dealer-page.component';

describe('InventoryDealerPageComponent', () => {
  let component: InventoryDealerPageComponent;
  let fixture: ComponentFixture<InventoryDealerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryDealerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryDealerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
