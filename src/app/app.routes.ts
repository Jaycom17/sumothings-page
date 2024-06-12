import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
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
import { TypesPageComponent } from './pages/types-page/types-page.component';
import { CreateShoppingPageComponent } from './pages/create-shopping-page/create-shopping-page.component';

import { authGuardAdmin } from './guards/app.guard';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'about-us', component: AboutUsPageComponent },
    { path: 'article/:id', component: ArticlePageComponent },
    { path: 'articles', component: ArticlesPageComponent },
    { path: 'inventory', component: InventoryPageComponent, canActivate: [authGuardAdmin]},
    { path: 'login', component: LoginPageComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'register-user', component: RegisterUserPageComponent },
    { path: 'inventory-product', component: InventoryProductPageComponent, canActivate: [authGuardAdmin] },
    { path: 'inventory-articles', component: InventoryArticlesPageComponent, canActivate: [authGuardAdmin] },
    { path: 'create-product', component: CreateProductPageComponent, canActivate: [authGuardAdmin] },
    { path: 'inventory-dealer', component: InventoryDealerPageComponent, canActivate: [authGuardAdmin] },
    { path: 'inventory-clients', component: InventoryClientsPageComponent, canActivate: [authGuardAdmin] },
    { path: 'inventory-shopping', component: InventoryShoppingPageComponent, canActivate: [authGuardAdmin] },
    { path: 'inventory-sale', component: InventorySalePageComponent, canActivate: [authGuardAdmin] },
    { path: 'contact', component:  ContactPageComponent},
    { path: 'services', component: ServicesPageComponent },
    { path: 'sale/:id', component: SalePageComponent, canActivate: [authGuardAdmin] },
    { path: 'shopping/:id', component: ShoppingPageComponent, canActivate: [authGuardAdmin] },
    { path: 'create-article', component: CreateArticlePageComponent, canActivate: [authGuardAdmin] },
    { path: 'create-dealer', component: CreateDealerPageComponent, canActivate: [authGuardAdmin]},
    { path: 'create-client', component: CreateClientPageComponent, canActivate: [authGuardAdmin]},
    { path: 'create-sale', component: CreateSalePageComponent, canActivate: [authGuardAdmin]},
    { path: 'admin-login', component: AdminLoginPageComponent},
    { path: 'edit-article/:id', component: EditArticlePageComponent, canActivate: [authGuardAdmin]},
    { path: 'update-dealer/:id', component: UpdateDealerPageComponent, canActivate: [authGuardAdmin]},
    { path: 'inventory-types', component: TypesPageComponent, canActivate: [authGuardAdmin]},
    { path: 'update-product/:id', component: UpdateProductPageComponent, canActivate: [authGuardAdmin]},
    { path: 'create-shopping', component: CreateShoppingPageComponent, canActivate: [authGuardAdmin]}
];
