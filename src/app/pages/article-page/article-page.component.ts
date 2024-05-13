import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-article-page',
    standalone: true,
    templateUrl: './article-page.component.html',
    styleUrl: './article-page.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class ArticlePageComponent implements OnInit{
  artID: string | null = '';
  article = {
    artTitle: 'Algo interesante que vale la pena leer sdsv´lfmlkdermbkgdnbpok m joedijght oi oi<o',
    artContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero sed urna ullamcorper maximus. Nulla facilisi. Morbi varius, purus quis ullamcorper commodo, sapien massa euismod justo, vitae tristique magna velit nec nibh. Mauris eget nisi sapien.Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci veritatis odit nobis, ratione sapiente unde ex possimus. Dolorem minus eos dolor asperiores hic reiciendis, molestias quas alias esse provident!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam harum sequi ratione officia quidem consectetur nam beatae pariatur alias adipisci unde, dolores quo eveniet soluta dolore?\n Optio accusantium cupiditate ipsa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, temporibus non placeat quidem et sunt vero nihil ratione, incidunt quis tempore dolor maiores debitis provident doloribus repellat quod veniam officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sit porro fugit reprehenderit error accusamus, consectetur sequi fuga temporibus delectus et debitis ad. Illo, magni impedit aut animi rerum iure!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iure, dolores illum ipsum aperiam vel tempora nulla rerum, voluptate repudiandae repellendus harum officiis, temporibus qui! Quibusdam dolorem suscipit nam minus!',
    artAuthor: 'Juan Pérez',
    artDate: '2021-10-01',

  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtiene el valor del parámetro de la URL
    this.artID = this.route.snapshot.paramMap.get('id');
  }
}
