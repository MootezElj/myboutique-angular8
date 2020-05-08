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
const Swal = require('sweetalert2');

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  private orderItems:OrderItem[]=[];
  totalPrice:number=0;
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

      this.current_user=current_user;
      this.orderService.getOrderById(orderId).subscribe(order=>{
      this.countries=countries["default"]
      this.order=order;
      this.orderItemService.getOrderItemsByOrderId(order.id).subscribe(orderItems=>{
        orderItems.forEach(item => {
          this.productService.getProductById(item.productId).subscribe(product=>{
            item.product=product;
            this.orderItems.push(item);
            this.totalPrice=this.totalPrice+(Number.parseFloat(product.price.toString())*item.quantity);
          })
        });
      })
      })
      },(error=>{
      alert("You must login before checkout.");
      this.router.navigate(['/login'] );
    }))
    }
    

    addAddress(){


      
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you confirm your order with those credentials !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      //if agree
      if (result.value) {
        console.log(this.address);
        this.orderService.updateOrderAddress(this.order.id,this.address).subscribe(order=>{
          console.log(order);
        })

        Swal.fire(
          'Success !',
          'Order successfuly added ! One of our admin will review it and confirm it as soon as possible.',
          'success'
        )
        this.router.navigate(['/']);
        
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Request canceled :)',
          'Canceled'
        )
      }
    })




    
    }
 
  

}
