import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/product/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private category_service_uri = "http://localhost:9101/api/categories";


  constructor(private http: HttpClient) { }

  public getCategoriesOfDepartment(depName:String):Observable<Category[]> {
    return this.http.get<any>(this.category_service_uri+"/department/"+depName);
  }

  public getCategories():Observable<Category[]> {
    return this.http.get<any>(this.category_service_uri);
  }

  public getCategoryByName(name:string):Observable<Category> {
    return this.http.get<any>(this.category_service_uri+"/category/"+name);
  }


}
