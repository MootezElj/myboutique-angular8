import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { HomeComponent } from './components/home/home.component';
import { DepartmentListComponent } from './components/product/department/department-list/department-list.component';


const routes: Routes = [
  {path: 'login', component: AuthenticateComponent},
  {path: 'departments', component: DepartmentListComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
