import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/product/category.service';
import { Category } from 'src/app/models/product/Category';
import { Department } from 'src/app/models/product/Department';
import { DepartmentService } from 'src/app/services/product/department.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  //@Output() categoryDepartmentUpdated = new EventEmitter();

  departments:Department[];
  categories: Category[];
  category:string="";
  department:string="";
 
  constructor(private router: Router
    ,private route:ActivatedRoute,private categoryService:CategoryService,private departmentService:DepartmentService) { }

  ngOnInit() {
    this.category=this.route.snapshot.paramMap.get("cat");
    console.log(this.category+" "+this.department);
    this.categoryService.getCategories().subscribe(categories=>{
      console.log(categories);
      this.department=this.route.snapshot.paramMap.get("dept");
        this.categories=categories; 
    });

    this.departmentService.getDepartments().subscribe(depts=>{
      this.departments=depts;
    })

  }

  // vote(dept: string, cat:string) {
  //   this.router.navigate(['/products', dept,cat]);
  //   this.categoryDepartmentUpdated.emit(true);
  // }

  
}
