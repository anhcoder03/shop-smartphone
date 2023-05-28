import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListCategoryComponent } from './modules/category/list-category/list-category.component';
import { ListProductComponent } from './modules/product/list-product/list-product.component';
import { AddProductComponent } from './modules/product/add-product/add-product.component';
import { AddCategoryComponent } from './modules/category/add-category/add-category.component';

const routes: Routes = [
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
        ],
      },
      {
        path: 'product',
        children: [
          { path: '', component: ListProductComponent },
          { path: 'add', component: AddProductComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
