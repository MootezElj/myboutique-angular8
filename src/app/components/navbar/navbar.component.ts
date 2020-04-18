import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/product/department.service';
import { CategoryService } from 'src/app/services/product/category.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Category } from 'src/app/models/product/Category';
import { Department } from 'src/app/models/product/Department';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  departments:Department[];
  categories: Category[];
  isLoggedIn:boolean = this.authencitaionSerice.isLogedIn();
  constructor(private router: Router
    ,private route:ActivatedRoute,private categoryService:CategoryService,private departmentService:DepartmentService
    , private authencitaionSerice:AuthenticationService) { }

  ngOnInit() {
    console.log(this.isLoggedIn)
    if (!this.isLoggedIn){
      this.route.queryParams.subscribe(params => {
        this.isLoggedIn = params['isLogged']== "true";
    });
    }


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

  disconnect(){
    this.authencitaionSerice.logout();
    this.router.navigate(['/login'],{queryParams:{isLogged:'false'}});
  }


 

}
