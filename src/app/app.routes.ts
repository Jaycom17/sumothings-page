import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ArticlesCrudPageComponent } from './pages/articles-crud-page/articles-crud-page.component';
import { ArticlesPageComponent } from './pages/articles-page/articles-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { InventoryProductPageComponent } from './pages/inventory-product-page/inventory-product-page.component';
import { InventoryArticlesPageComponent } from './pages/inventory-articles-page/inventory-articles-page.component';
import { CreateProductPageComponent } from './pages/create-product-page/create-product-page.component';
import { InventoryDealerPageComponent } from './pages/inventory-dealer-page/inventory-dealer-page.component';
import { InventoryClientsPageComponent } from './pages/inventory-clients-page/inventory-clients-page.component';
import { InventoryShoppingPageComponent } from './pages/inventory-shopping-page/inventory-shopping-page.component';
import { InventorySalePageComponent } from './pages/inventory-sale-page/inventory-sale-page.component';
import { SalePageComponent } from './pages/sale-page/sale-page.component';
import { ShoppingPageComponent } from './pages/shopping-page/shopping-page.component';
import { ProductListComponent } from './pages/products-page/products-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { CreateArticlePageComponent } from './pages/create-article-page/create-article-page.component';
import { CreateDealerPageComponent } from './pages/create-dealer-page/create-dealer-page.component';
import { CreateClientPageComponent } from './pages/create-client-page/create-client-page.component';
import { CreateSalePageComponent } from './pages/create-sale-page/create-sale-page.component';
import { AdminLoginPageComponent } from './pages/admin-login-page/admin-login-page.component';
import { EditArticlePageComponent } from './pages/edit-article-page/edit-article-page/edit-article-page.component';
import { UpdateProductPageComponent } from './pages/update_product_page/update-product-page/update-product-page.component';
import { UpdateDealerPageComponent } from './pages/update-dealer-page/update-dealer-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'about-us', component: AboutUsPageComponent },
    { path: 'article/:id', component: ArticlePageComponent },
    { path: 'articles-crud', component: ArticlesCrudPageComponent },
    { path: 'articles', component: ArticlesPageComponent },
    { path: 'inventory', component: InventoryPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'register-user', component: RegisterUserPageComponent },
    { path: 'inventory-product', component: InventoryProductPageComponent },
    { path: 'inventory-articles', component: InventoryArticlesPageComponent },
    { path: 'create-product', component: CreateProductPageComponent },
    { path: 'inventory-dealer', component: InventoryDealerPageComponent },
    { path: 'inventory-clients', component: InventoryClientsPageComponent },
    { path: 'inventory-shopping', component: InventoryShoppingPageComponent },
    { path: 'inventory-sale', component: InventorySalePageComponent },
    { path: 'contact', component:  ContactPageComponent},
    { path: 'services', component: ServicesPageComponent },
    { path: 'sale/:id', component: SalePageComponent },
    { path: 'shopping/:id', component: ShoppingPageComponent },
    { path: 'create-article', component: CreateArticlePageComponent },
    { path: 'create-dealer', component: CreateDealerPageComponent},
    { path: 'create-client', component: CreateClientPageComponent},
    { path: 'create-sale', component: CreateSalePageComponent},
    { path: 'admin-login', component: AdminLoginPageComponent},
    { path: 'edit-article/:id', component: EditArticlePageComponent},
    { path: 'update-product/:id', component: UpdateProductPageComponent},
    { path: 'update-dealer/:id', component: UpdateDealerPageComponent}
];
