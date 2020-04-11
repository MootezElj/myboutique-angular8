import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/product/department.service';
import { CategoryService } from 'src/app/services/product/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/product/Category';
import { Department } from 'src/app/models/product/Department';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  departments:Department[];
  categories: Category[];
  constructor(private router: Router
    ,private route:ActivatedRoute,private categoryService:CategoryService,private departmentService:DepartmentService) { }

  ngOnInit() {

    this.categoryService.getCategories().subscribe(categories=>{
      console.log(categories);
        this.categories=categories;
    });

    this.departmentService.getDepartments().subscribe(depts=>{
      this.departments=depts;
    })

  }

  navigateToCategory(cat,dept){
    console.log(cat+" "+dept );
    this.router.navigate(['products', dept,cat]);
    location.reload()
  }

}
