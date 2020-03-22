import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { first, map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  private isLoggedIn:boolean = false;
  loginModel: LoginModel = {
    usernameOrEmail:'',
    password:''
  };
  constructor(private router: Router,private authenticationService:AuthenticationService) { }

  ngOnInit() {
  this.authenticationService.getCurrentUser().subscribe(user=>{
    this.isLoggedIn=true;
    console.log("Info: Loged in as :"+user.username)
  },error=>{
    this.isLoggedIn=false;
    console.log("Info: Not Loged in !")
  });
  
  
  
  }

  login(){
    //console.log(this.authenticationService.login(this.loginModel.usernameOrEmail,this.loginModel.password));
    
    this.authenticationService.login(this.loginModel.usernameOrEmail, this.loginModel.password)
    .pipe(first())
    .subscribe(
        data => { 
            this.router.navigate(['']);
        },
        error => {
        });
  }

  test(){
    this.authenticationService.getCurrentUser().subscribe(user=>{
      console.log(user.username);
    });

   
  }



}
