import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer/Customer';
import { User } from 'src/app/models/User';
import { RegisterModel } from 'src/app/models/RegisterModel';
import { CustomerService } from 'src/app/services/customer/customer.service';
import '../../../../assets/smtp.js';
import { AuthenticationService } from 'src/app/services/authentication.service.js';
import {Router} from "@angular/router"
import sweetalert2 from 'sweetalert2'
 
// CommonJS
const Swal = require('sweetalert2');

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

  constructor(private router: Router,private customerService:CustomerService,private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  submitRegister(){
    //
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you confirm your request to register with !'+this.registerModel.email +" and "+this.registerModel.username,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        //if agree
        console.log(this.registerModel);
        let customer:Customer={
          email:this.registerModel.email,
          firstName:this.registerModel.firstName,
          username:this.registerModel.username,
          lastName:this.registerModel.lastName,
          phone:'',
        }
    
        let user:User = {
          email:this.registerModel.email,
          username:this.registerModel.username,
          password:this.registerModel.password,
          matchingPassword:this.registerModel.confirmPassword
        }
    
        this.customerService.createCustomer(customer).subscribe(customer=>{
          console.log("success !");
          this.authenticationService.registerCustomer(user).subscribe(u=>{
            console.log(u)
          });
          console.log(customer);
        });
        Swal.fire(
          'Success !',
          'You will be directed to login page ',
          'success'
        )
        this.router.navigate(['/login'])
        
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


    //








    
  }


}
