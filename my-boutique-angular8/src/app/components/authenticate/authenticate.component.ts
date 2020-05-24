import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { first, map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { CartService } from 'src/app/services/customer/cart.service';


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
  constructor(private cartService:CartService,
    private router: Router,
    private route:ActivatedRoute,
    private authenticationService:AuthenticationService) { }

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
          this.authenticationService.getCurrentUser().subscribe(user=>{
            if (localStorage.getItem("CartToken")!=null){
              this.cartService.assignAnonymCartToCustomer(user.username).subscribe(cart=>{
                console.log(cart.id);
                localStorage.removeItem("CartToken");
              });
            }
            else {
              this.cartService.createCartForCustomer(user.username).subscribe(resp=>{
                console.log("create cart for user "+resp);
              })
            }
          })

          if (localStorage.getItem("CartToken")!=null){
           this.authenticationService.getCurrentUser().subscribe(user2=>{
             this.cartService.assignAnonymCartToCustomer(user2.username).subscribe(cart=>{
               console.log(cart.id);
               localStorage.removeItem("CartToken");
             })
           })
          }
          else{
          
          }
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
