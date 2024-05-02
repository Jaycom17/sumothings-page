import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticlesCrudPageComponent } from './pages/articles-crud-page/articles-crud-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductCrudPageComponent } from './pages/product-crud-page/product-crud-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { InventoryProductPageComponent } from './pages/inventory-product-page/inventory-product-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'about-us', component: AboutUsPageComponent },
    { path: 'article', component: ArticlePageComponent },
    { path: 'articles-crud', component: ArticlesCrudPageComponent },
    { path: 'articles', component: ArticlesPageComponent },
    { path: 'inventory', component: InventoryPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'product-crud', component: ProductCrudPageComponent },
    { path: 'products', component: ProductsPageComponent },
    { path: 'register-user', component: RegisterUserPageComponent },
    { path: 'inventory-product', component: InventoryProductPageComponent },
];
