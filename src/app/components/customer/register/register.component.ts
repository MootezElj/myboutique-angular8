import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer/Customer';
import { User } from 'src/app/models/User';
import { RegisterModel } from 'src/app/models/RegisterModel';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerModel: RegisterModel={
    confirmPassword:'',
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    username:''
  }

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }

  submitRegister(){
    console.log(this.registerModel);
    let customer:Customer={
      email:this.registerModel.email,
      firstName:this.registerModel.firstName,
      username:this.registerModel.username,
      lastName:this.registerModel.lastName,
      phone:'',
    }

    this.customerService.createCustomer(customer).subscribe(customer=>{
      console.log("success !");
      console.log(customer);
    });
  }

}
