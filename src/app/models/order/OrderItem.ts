import { AbstractEntity } from '../commons/AbstractEntity';
import { Product } from '../product/Product';

export interface OrderItem extends AbstractEntity{
    id:number,
    quantity:number,
    productId:number,
    orderId:number,
    product?:Product
}
