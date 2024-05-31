import { Component } from '@angular/core';
import { Article } from '../../interfaces/Article.interface';
import { ArticleServicesService } from '../../services/article/article-services.service';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-create-article-page',
  standalone: true,
  imports: [InventoryAsideBarComponent,ReactiveFormsModule],
  templateUrl: './create-article-page.component.html',
  styleUrl: './create-article-page.component.css'
})
export class CreateArticlePageComponent {

  constructor(private articleService: ArticleServicesService) { }


}
