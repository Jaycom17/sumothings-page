import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-create-article-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './create-article-page.component.html',
  styleUrl: './create-article-page.component.css'
})
export class CreateArticlePageComponent {

}
