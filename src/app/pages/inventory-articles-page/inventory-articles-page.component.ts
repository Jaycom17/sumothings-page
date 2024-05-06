import { Component } from '@angular/core';
import { InventoryAsideBarComponent } from '../../components/inventory-aside-bar/inventory-aside-bar.component';

@Component({
  selector: 'app-inventory-articles-page',
  standalone: true,
  imports: [InventoryAsideBarComponent],
  templateUrl: './inventory-articles-page.component.html',
  styleUrl: './inventory-articles-page.component.css'
})
export class InventoryArticlesPageComponent {

  orderByDate(){
    this.articles.sort((a, b) => a.artDate.localeCompare(b.artDate))
  }

  orderByTitle(){
    this.articles.sort((a, b) => a.artTitle.localeCompare(b.artTitle))
  }

  orderByAuthor(){
    this.articles.sort((a, b) => a.artAuthor.localeCompare(b.artAuthor))
  }
  
  deleteArticle(artID: string){
    this.articles = this.articles.filter(article => article.artID !== artID)
  }

  articles = [
    { artID: '1', artTitle: 'Algo melo', artShortDescription: 'un articulo melo sobre algun tema que es interesante y bacano, solo que no se que escribir', artAuthor: 'un hermano melo', artDate: '2021-01-01' },
    { artID: '2', artTitle: 'Algo melo', artShortDescription: 'un articulo melo sobre algun tema que es interesante y bacano, solo que no se que escribir', artAuthor: 'un hermano melo', artDate: '2020-01-01' },
    { artID: '3', artTitle: 'Algo melo', artShortDescription: 'un articulo melo sobre algun tema que es interesante y bacano, solo que no se que escribir', artAuthor: 'un hermano melo', artDate: '2012-01-01' },
  ]
}
