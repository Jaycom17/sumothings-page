import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryPageComponent } from './create-category-page.component';

describe('CreateCategoryPageComponent', () => {
  let component: CreateCategoryPageComponent;
  let fixture: ComponentFixture<CreateCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCategoryPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});