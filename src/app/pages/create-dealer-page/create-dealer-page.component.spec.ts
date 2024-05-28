import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDealerPageComponent } from './create-dealer-page.component';

describe('CreateDealerPageComponent', () => {
  let component: CreateDealerPageComponent;
  let fixture: ComponentFixture<CreateDealerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDealerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateDealerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
