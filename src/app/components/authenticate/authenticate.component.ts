import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
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
  constructor(private router: Router,private route:ActivatedRoute,private authenticationService:AuthenticationService) { }

  ngOnInit() {
  this.authenticationService.getCurrentUser().subscribe(user=>{
    this.isLoggedIn=true;
  },error=>{
    this.isLoggedIn=false;
  });
  
  
  
  }

  login(){

    
    this.authenticationService.login(this.loginModel.usernameOrEmail, this.loginModel.password)
    .pipe(first())
    .subscribe(
        data => { 
            this.router.navigateByUrl("/?isLogged=true");

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
