import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/product/department.service';
import { Department } from 'src/app/models/product/Department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments:Department[];

  constructor(private departmentService:DepartmentService) { }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(departments=>{
      console.log(departments)
        this.departments = departments;
    })
  }

}
