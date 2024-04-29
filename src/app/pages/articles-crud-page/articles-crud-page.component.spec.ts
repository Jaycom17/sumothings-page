import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCrudPageComponent } from './articles-crud-page.component';

describe('ArticlesCrudPageComponent', () => {
  let component: ArticlesCrudPageComponent;
  let fixture: ComponentFixture<ArticlesCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesCrudPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticlesCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
