import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAsideBarComponent } from './inventory-aside-bar.component';

describe('InventoryAsideBarComponent', () => {
  let component: InventoryAsideBarComponent;
  let fixture: ComponentFixture<InventoryAsideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryAsideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryAsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
