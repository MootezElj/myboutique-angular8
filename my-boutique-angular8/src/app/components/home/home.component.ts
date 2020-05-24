import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/product/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getTrendingProductsForDepartment("Electronics").subscribe(products=>{
      this.products=products;
      console.log("Prods "+products[0].name);
    })
  }

}
