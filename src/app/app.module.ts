import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { HomeComponent } from './components/home/home.component';
import { HomeSliderComponent } from './components/home/home-slider/home-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductService } from './services/product/product.service';
import { DepartmentListComponent } from './components/product/department/department-list/department-list.component';
import { CategoryService } from './services/product/category.service';
import { CategoryListComponent } from './components/product/category/category-list/category-list.component';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { HomeDepartmentListComponent } from './components/home/home-department-list/home-department-list.component';
import { ReviewListComponent } from './components/product/review/review-list/review-list.component';
import { RegisterComponent } from './components/customer/register/register.component';
import { CustomerService } from './services/customer/customer.service';
import { CartComponent } from './components/customer/cart/cart.component';
import { CartDetailsComponent } from './components/customer/cart-details/cart-details.component';
import { CartService } from './services/customer/cart.service';
import { OrderItemService } from './services/order/order-item.service';
import { CheckoutComponent } from './components/order/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    NavbarComponent,
    HomeComponent,
    HomeSliderComponent,
    ProductListComponent,
    DepartmentListComponent,
    CategoryListComponent,
    ProductDetailsComponent,
    HomeDepartmentListComponent,
    ReviewListComponent,
    RegisterComponent,
    CartComponent,
    CartDetailsComponent,
    CheckoutComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    SlideshowModule,
    CommonModule
  ],
  providers: [AuthenticationService,
    ProductService,
    CategoryService,
    CustomerService,
    CartService,
    OrderItemService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
