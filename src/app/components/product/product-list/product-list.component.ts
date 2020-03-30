import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/product/Product';
import { Category } from 'src/app/models/product/Category';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products:Product[];
  categories: Category[];
  
  constructor(private productService:ProductService) { }

  ngOnInit() {

    this.productService.getCategories().subscribe(categories=>{
        this.categories=categories; 
    });

    this.productService.getProducts().subscribe(products=>{
      this.products=products;
    })

  }


  getProductHavingCategory(category_name:string){
     this.productService.getProductHavingCategory(category_name).pipe(map(products=>{
      return products;
    }));
  }


}
