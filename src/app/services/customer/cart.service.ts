import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/customer/Cart';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart_service_uri = "http://localhost:9101/api/carts";
  constructor(private http: HttpClient) { }


  public createAnonymCart() {
    return this.http.post(this.cart_service_uri, null, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    }
    );
  }

  public addProductToCart(productId) {
    return this.http.put(this.cart_service_uri + "/AddProduct/" + productId, null, {
      headers: new HttpHeaders().set('CartToken', localStorage.getItem("CartToken")),
      responseType: 'text'
    });
  }

  public getCurrentAnonymCart():Observable<Cart>{
    return this.http.get<Cart>(this.cart_service_uri + "/Anonym",   {
      headers: new HttpHeaders().set('CartToken', localStorage.getItem("CartToken"))
      
    });
  }


}
