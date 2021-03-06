import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Review } from 'src/app/models/product/Review';
import { ReviewService } from 'src/app/services/product/review.service';
import { CartService } from 'src/app/services/customer/cart.service';
import { User } from 'src/app/models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
const Swal = require('sweetalert2');

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product:Product;
  private currentUser:User;
  private review:Review = {
    description:'',
    title:'',
    name:'',
    product:null,
    rating:0
  };
  private productId:number;
  private reviews:Review[];
  constructor(private cartService:CartService,
    private productService:ProductService,
     private route:ActivatedRoute,
     private reviewService:ReviewService,
     private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getCurrentUser().subscribe(user=>
      this.currentUser=user);
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

  addProductToCart(productId:number){
    console.log("adca "+productId)
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you confirm adding this product to your cart !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        //if agree
        if (localStorage.getItem("CartToken")==null){
          this.cartService.createAnonymCart().subscribe(res=>{
            localStorage.setItem("CartToken",res);
            this.cartService.addProductToAnonymCart(productId).subscribe()});
        }
        else {
          this.cartService.addProductToAnonymCart(productId).subscribe();
        }
        Swal.fire(
          'Success !',
          'Product successfuly added to cart',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Request canceled :)',
          'Canceled'
        )
      }
    })
  }

  addReview(){
    this.review.product = this.product;
    console.log(this.review)
    this.reviewService.addReview(this.review).subscribe(review=>{
      console.log("success Id:"+review.id);
    })
    location.reload();
  }
}
