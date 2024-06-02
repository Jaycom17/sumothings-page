import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDealerPageComponent } from './update-dealer-page.component';

describe('UpdateDealerPageComponent', () => {
  let component: UpdateDealerPageComponent;
  let fixture: ComponentFixture<UpdateDealerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDealerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDealerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
