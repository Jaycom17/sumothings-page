import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryArticlesPageComponent } from './inventory-articles-page.component';

describe('InventoryArticlesPageComponent', () => {
  let component: InventoryArticlesPageComponent;
  let fixture: ComponentFixture<InventoryArticlesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventoryArticlesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InventoryArticlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
