import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DashboardHeaderComponent } from './components/dashboard/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './components/dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListCategoryComponent } from './modules/category/list-category/list-category.component';
import { ListProductComponent } from './modules/product/list-product/list-product.component';
import { AddProductComponent } from './modules/product/add-product/add-product.component';
import { AddCategoryComponent } from './modules/category/add-category/add-category.component';
import { EditCategoryComponent } from './modules/category/edit-category/edit-category.component';
import { SignupComponent } from './pages/accounts/signup/signup.component';
import { SigninComponent } from './pages/accounts/signin/signin.component';
import { EditProductsComponent } from './modules/product/edit-products/edit-products.component';
import { SliderComponent } from './components/common/slider/slider.component';
import { MenuComponent } from './components/common/menu/menu.component';
import { ProductAppleComponent } from './components/product-apple/product-apple.component';
import { ProductSamsungComponent } from './components/product-samsung/product-samsung.component';
import { ProductXiaomiOppoComponent } from './components/product-xiaomi-oppo/product-xiaomi-oppo.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { AccountListComponent } from './modules/account/account-list/account-list.component';
import { AccountUpdateComponent } from './modules/account/account-update/account-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    HomepageComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    DashboardComponent,
    ListCategoryComponent,
    ListProductComponent,
    AddProductComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    SignupComponent,
    SigninComponent,
    EditProductsComponent,
    SliderComponent,
    MenuComponent,
    ProductAppleComponent,
    ProductSamsungComponent,
    ProductXiaomiOppoComponent,
    SocialMediaComponent,
    AccountListComponent,
    AccountUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    CarouselModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
