import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Review } from 'src/app/models/product/Review';
import { ReviewService } from 'src/app/services/product/review.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product:Product;
  private productId:number;
  private reviews:Review[];
  constructor(private productService:ProductService, private route:ActivatedRoute,private reviewService:ReviewService) { }

  ngOnInit() {
    this.productId=Number.parseFloat(this.route.snapshot.paramMap.get("product"));
    this.productService.getProductById(this.productId).subscribe(product=>{
      console.log(product)
      this.product=product;
      this.reviewService.getReviewHavingProductId(product.id).subscribe(reviews=>{
        console.log(reviews)
        this.reviews=reviews;
      })
    })
  }

}
