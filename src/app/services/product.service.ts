import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
 
  products:Product[];
  product_service_uri = "http://localhost:9101/api/products";

  constructor(private http: HttpClient) { }




  public getProducts():Observable<Product[]> {
    return this.http.get<any>(this.product_service_uri);
  }

  
}
