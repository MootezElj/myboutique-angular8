import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/models/order/Order';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/order/Country';
import { Address } from 'src/app/models/order/Address';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private order_service_uri = "http://localhost:9101/api/orders";

  constructor(private http: HttpClient) { }

  public getOrderById(orderId:number):Observable<Order>{
    return this.http.get<Order>(this.order_service_uri+"/"+orderId
    );
  }

  public updateOrder

  public getCountries():Observable<Country[]>{
    return this.http.get<Country[]>("https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json");
  }

  public updateOrderAddress(orderId:number,address:Address){
    return this.http.put("http://localhost:9101/api/orders/UpdAddress/"+orderId,address);
  }
}
