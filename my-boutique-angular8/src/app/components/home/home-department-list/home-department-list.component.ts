import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/product/Department';
import { DepartmentService } from 'src/app/services/product/department.service';

@Component({
  selector: 'app-home-department-list',
  templateUrl: './home-department-list.component.html',
  styleUrls: ['./home-department-list.component.css']
})
export class HomeDepartmentListComponent implements OnInit {
  departments:Department[];
  constructor(private departmentService:DepartmentService) { }

  ngOnInit() {this.departmentService.getDepartments().subscribe(departments=>{

    var items = departments.slice(0, 6);


    console.log(items)
      this.departments = items;
  })
}

}
