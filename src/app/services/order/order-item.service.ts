import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItem } from 'src/app/models/order/OrderItem';
import { Product } from 'src/app/models/product/Product';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {
  private orderItem_service_uri = "http://localhost:9101/api/order-items";

  constructor(private http: HttpClient) { }


  public getOrderItemsByOrderId(orderId:number):Observable<OrderItem[]>{
    return this.http.get<OrderItem[]>(this.orderItem_service_uri+"/order/"+orderId, {
      headers: new HttpHeaders().set('CartToken', localStorage.getItem("CartToken"))
    }
    );
  }

  public removeOrderItemById(orderId:number){

    return this.http.delete(this.orderItem_service_uri+"/"+orderId  );
  }

}
