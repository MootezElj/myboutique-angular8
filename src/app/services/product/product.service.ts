import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';
import { Product } from 'src/app/models/product/Product';
import { Category } from 'src/app/models/product/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
 
  product_service_uri = "http://localhost:9101/api/products";
  category_service_uri = "http://localhost:9101/api/categories";
  constructor(private http: HttpClient) { }

  public getProducts():Observable<Product[]> {
    return this.http.get<any>(this.product_service_uri);
  }

  public getProductHavingCategory(category_name:string):Observable<Product[]> {
    return this.http.get<any>(this.product_service_uri+"/category/"+category_name);
  }

  public getTrendingProductsForDepartment(dep_name:string):Observable<Product[]> {
    return this.http.get<any>(this.product_service_uri+"/trending/department/"+dep_name);
  }


  public getProductById(id:number):Observable<Product> {
    return this.http.get<any>(this.product_service_uri+"/"+id);
  }


  
}
