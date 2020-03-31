import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentListComponent } from './components/product/department/department-list/department-list.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';


const routes: Routes = [
  {path: 'login', component: AuthenticateComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'products/:dept/:cat', component: ProductListComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
