import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/models/product/Department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  product_service_uri = "http://localhost:9101/api/products";
  category_service_uri = "http://localhost:9101/api/categories";
  department_service_uri = "http://localhost:9101/api/departments";

  constructor(private http: HttpClient) { }

  public getDepartments():Observable<Department[]> {
    return this.http.get<any>(this.department_service_uri);
  }
  
}
