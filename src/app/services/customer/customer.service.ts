import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/Customer';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customer_service_uri = "http://localhost:9101/api/customers";
  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  createCustomer(customer:Customer){
    var headers = new Headers();
    console.log(customer);
    return this.http.post(this.customer_service_uri, customer);
  }

  
}
