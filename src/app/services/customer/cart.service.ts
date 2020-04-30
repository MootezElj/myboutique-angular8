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

  public createCartForCustomer(customerUsername:string){
    return this.http.post<Cart>(this.cart_service_uri + "/customer/" + customerUsername, null);
  }

  public assignAnonymCartToCustomer(customerUsername:string):Observable<Cart>{
    return this.http.put<Cart>(this.cart_service_uri + "/AssignAnonymCartToCustomer/" + customerUsername, null, {
      headers: new HttpHeaders().set('CartToken', localStorage.getItem("CartToken"))
    });
  }
  //Anonym Cart
  public addProductToAnonymCart(productId:number) {
    return this.http.put(this.cart_service_uri + "/AddProduct/" + productId, null, {
      headers: new HttpHeaders().set('CartToken', localStorage.getItem("CartToken")),
      responseType: 'text'
    });
  }

  public addProductToCart(cartId:number,productId:number) {
    return this.http.put(this.cart_service_uri + "/AddProduct/" + cartId+"/"+productId, null);
  }

  public getCurrentAnonymCart():Observable<Cart>{
    return this.http.get<Cart>(this.cart_service_uri + "/Anonym",   {
      headers: new HttpHeaders().set('CartToken', localStorage.getItem("CartToken"))
      
    });
  }

  public getCartByCustomerUsername(username:string):Observable<Cart>{
    return this.http.get<Cart>(this.cart_service_uri + "/customer?username="+username);
  }


}
