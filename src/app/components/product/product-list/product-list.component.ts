import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/product/Product';
import { Category } from 'src/app/models/product/Category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/product/category.service';
import { CartService } from 'src/app/services/customer/cart.service';
import sweetalert2 from 'sweetalert2'
 
// CommonJS
const Swal = require('sweetalert2');
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private selectedOptionForProductList:any;
  products:Product[];
  categories: Category[]=new Array();;
  category:string="";
  department:string="";
  constructor(private cartService:CartService, private productService:ProductService, private route:ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit() {

    console.log(this.selectedOptionForProductList);
    this.department=this.route.snapshot.paramMap.get("dept");
    this.category=this.route.snapshot.paramMap.get("cat");

  
    if(this.category.toLocaleLowerCase()!="all"){
      this.categoryService.getCategoryByName(this.category).subscribe(cat=>{
       
        this.categories.push(cat);
      });
   
      this.productService.getProductHavingCategory(this.category).subscribe(products=>{
        this.products=products;
      });
    }
    else{

   
    this.categoryService.getCategoriesOfDepartment(this.department).subscribe(categories=>{
        this.categories=categories;
    });

    this.productService.getProducts().subscribe(products=>{
      this.products=products;
    });
  }

  }


  //event handler for the select element's change event
  updateProductListSelectHandler (event: any) {
    let  choice = event.target.value;
    //update the ui
    switch(choice) { 
      case 'Top-Rated': {
        
         //statements; 
         break; 
      } 
      case 'Highest-price': {
        
      this.sortByPrice(this.products);
         //statements; 
         break; 
      } 
      case 'Lowest-price': { 
        this.sortByPrice(this.products);
        this.products.reverse();
         //statements; 
         break;  
     } 
     case 'Newest': { 
      //statements; 
      break; 
   } 
      default: { 
         //statements; 
         break; 
      } 
   }
    

   
    this.selectedOptionForProductList = event.target.value;
  }


  sortByPrice(products:Product[]):Product[]{
    var sortedProducts: Product[] = this.products.sort((p1, p2) => {
      if (p1.price < p2.price) {
          return 1;
      }
  
      if (p1.price > p2.price) {
          return -1;
      }
  
      return 0;
  });
  return sortedProducts;
  }
  // updateDeptCat(update:boolean){

  //   if (update)
  //   this.ngOnInit();

  // }
  
  addProductToCart(productId:number){

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
            this.cartService.addProductToCart(productId).subscribe()});
        }
        else {
          this.cartService.addProductToCart(productId).subscribe();
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
  


}
