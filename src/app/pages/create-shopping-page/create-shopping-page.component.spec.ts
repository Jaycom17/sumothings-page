import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShoppingPageComponent } from './create-shopping-page.component';

describe('CreateShoppingPageComponent', () => {
  let component: CreateShoppingPageComponent;
  let fixture: ComponentFixture<CreateShoppingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateShoppingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateShoppingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
