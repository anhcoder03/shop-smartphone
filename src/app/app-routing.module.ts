import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListCategoryComponent } from './modules/category/list-category/list-category.component';
import { ListProductComponent } from './modules/product/list-product/list-product.component';
import { AddProductComponent } from './modules/product/add-product/add-product.component';
import { AddCategoryComponent } from './modules/category/add-category/add-category.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { EditCategoryComponent } from './modules/category/edit-category/edit-category.component';
import { SigninComponent } from './pages/accounts/signin/signin.component';
import { SignupComponent } from './pages/accounts/signup/signup.component';
import { EditProductsComponent } from './modules/product/edit-products/edit-products.component';
import { AccountListComponent } from './modules/account/account-list/account-list.component';
import { AccountUpdateComponent } from './modules/account/account-update/account-update.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'contact', component: ContactPageComponent },
      { path: 'news', component: NewsPageComponent },
      { path: 'product/:slug', component: ProductDetailComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'category',
        children: [
          { path: '', component: ListCategoryComponent },
          { path: 'add', component: AddCategoryComponent },
          { path: ':id/edit', component: EditCategoryComponent },
        ],
      },
      {
        path: 'product',
        children: [
          { path: '', component: ListProductComponent },
          { path: 'add', component: AddProductComponent },
          { path: ':id/edit', component: EditProductsComponent },
        ],
      },
      {
        path: 'account',
        children: [
          { path: '', component: AccountListComponent },
          { path: ':id/edit', component: AccountUpdateComponent },
        ],
      },
    ],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
