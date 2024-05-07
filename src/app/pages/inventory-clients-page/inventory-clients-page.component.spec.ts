import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryClientsPageComponent } from './inventory-clients-page.component';

describe('InventoryClientsPageComponent', () => {
  let component: InventoryClientsPageComponent;
  let fixture: ComponentFixture<InventoryClientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryClientsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
