import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySalePageComponent } from './inventory-sale-page.component';

describe('InventorySalePageComponent', () => {
  let component: InventorySalePageComponent;
  let fixture: ComponentFixture<InventorySalePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventorySalePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventorySalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
