import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductAddComponent } from './modules/product/product-add/product-add.component';
import { ProductUpdateComponent } from './modules/product/product-update/product-update.component';
import { CategoryListComponent } from './modules/categories/category-list/category-list.component';
import { CategoryAddComponent } from './modules/categories/category-add/category-add.component';
import { CategoryUpdateComponent } from './modules/categories/category-update/category-update.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductListComponent } from './modules/product/product-list/product-list.component';

const routes: Routes = [
  {
    path: "", component: ClientLayoutComponent, children: [
      {
        path: "", component: HomepageComponent
      },
      {
        path: "products", children: [
          { path: "", component: ProductPageComponent },
          { path: ":id", component: ProductDetailComponent }
        ]
      },

    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      {
        path: "", redirectTo: "dashboard", pathMatch: 'full'
      },
      {
        path: "dashboard", component: DashboardComponent
      },
      {
        path: "products", children: [
          {
            path: "", component: ProductListComponent
          },
          {
            path: "add", component: ProductAddComponent
          },
          {
            path: ":id/update", component: ProductUpdateComponent
          },
        ]
      },
      {
        path: "categories", children: [
          {
            path: "", component: CategoryListComponent
          },
          {
            path: "add", component: CategoryAddComponent
          },
          {
            path: ":id/update", component: CategoryUpdateComponent
          },
        ]
      },
    ]
  },
  {
    path: "**", component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
