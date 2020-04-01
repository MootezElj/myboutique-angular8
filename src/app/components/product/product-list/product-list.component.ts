import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/models/product/Product';
import { Category } from 'src/app/models/product/Category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/product/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  categories: Category[];
  category:string="";
  department:string="";
  constructor(private productService:ProductService, private route:ActivatedRoute,private categoryService:CategoryService) { }

  ngOnInit() {
    this.department=this.route.snapshot.paramMap.get("dept");
    this.category=this.route.snapshot.paramMap.get("cat");

    console.log(this.category+" "+this.department);
    if(this.category.toLocaleLowerCase()!="all"){
      this.categoryService.getCategoryByName(this.category).subscribe(cat=>{
        this.categories[0]=cat;
      });
      console.log(this.category);
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

  // updateDeptCat(update:boolean){

  //   if (update)
  //   this.ngOnInit();

  // }
  

  


}
