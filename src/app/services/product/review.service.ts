import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product/Product';
import { HttpClient } from '@angular/common/http';
import { Review } from 'src/app/models/product/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  product_service_uri = "http://localhost:9101/api/products";
  review_service_uri = "http://localhost:9101/api/reviews";
  constructor(private http: HttpClient) { }

  public getReviewHavingProductId(productId:number):Observable<Review[]> {
    return this.http.get<any>(this.review_service_uri+"/ofProduct/"+productId);
  }
  
}
