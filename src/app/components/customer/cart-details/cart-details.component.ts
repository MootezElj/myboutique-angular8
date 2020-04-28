import { Component, OnInit } from '@angular/core';
import { OrderItemService } from 'src/app/services/order/order-item.service';
import { CartService } from 'src/app/services/customer/cart.service';
import { Product } from 'src/app/models/product/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { OrderItem } from 'src/app/models/order/OrderItem';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  private orderItems:OrderItem[]=[];
  private totalPrice:number=0;

  constructor(private productService:ProductService, private orderItemService:OrderItemService,private cartService:CartService) { }

  ngOnInit() {
    this.cartService.getCurrentAnonymCart().subscribe(cart=>{
      console.log("fafa " +cart.orderId);
      this.orderItemService.getOrderItemsByOrderId(cart.orderId).subscribe(orderItems=>{
        console.log(orderItems.length);
        orderItems.forEach(item => {
          this.productService.getProductById(item.productId).subscribe(product=>{
            item.product=product;
            this.orderItems.push(item);
            console.log("fasf2 "+product.price.toString())
            this.totalPrice=this.totalPrice+Number.parseFloat(product.price.toString());
          })
        });
      })
    })
  }

  removeItem(itemId){
    console.log("Itemlds "+itemId)
    this.orderItemService.removeOrderItemById(itemId).subscribe(resp=>{
      console.log(resp)
      location.reload();
    });
  }
}
