import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/customer/cart.service';
import { OrderItemService } from 'src/app/services/order/order-item.service';
import { ProductService } from 'src/app/services/product/product.service';
import { OrderItem } from 'src/app/models/order/OrderItem';
import { User } from 'src/app/models/User';
import { Order } from 'src/app/models/order/Order';
import { OrderService } from 'src/app/services/order/order.service';
import  *  as  countries  from  './../../../../assets/resources/json/countries.json';
import { Country } from 'src/app/models/order/Country';
import { Address } from 'src/app/models/order/Address';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderItems:OrderItem[];
  totalPrice:number;
  current_user:User;
  order : Order;
  address:Address = {
    address1:'',
    address2:'',
    city:'',
    country:'',
    postcode:''
  };
  countries:Country[];


  constructor(
    private route: ActivatedRoute,
    private productService:ProductService,
    private orderItemService:OrderItemService,
    private cartService:CartService,
    private authenticationService:AuthenticationService,
    private orderService:OrderService,
    private router: Router) { }

  ngOnInit() {
      this.authenticationService.getCurrentUser().subscribe(current_user=>{
      let orderId = Number.parseFloat(this.route.snapshot.paramMap.get("orderId"));
      this.orderItemService.getOrderItemsByOrderId(orderId).subscribe(orderItems=>{
        this.orderItems=orderItems;
      })
      this.current_user=current_user;
      this.orderService.getOrderById(orderId).subscribe(order=>{
      this.countries=countries["default"]
      this.order=order; 
      })
      },(error=>{
      alert("You must login before checkout.");
      this.router.navigate(['/login'] );
    }))
    }
    

    addAddress(){
      console.log(this.address);
      this.orderService.updateOrderAddress(this.order.id,this.address).subscribe(order=>{
        console.log(order);
      })
    }
 
  

}
