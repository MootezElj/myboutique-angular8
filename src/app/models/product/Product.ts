import { Review } from './Review';
import { Category } from './Category';
import { AbstractEntity } from '../commons/AbstractEntity';

export interface Product extends AbstractEntity{
    name: string,
    description: string,
    price: BigInteger,
    quantity: number,
    discount:number,
    priceBeforeDiscount:number,
    status: string,
    salesCounter: number
    reviews?:Review[],
    category:Category;
    image1:string,
    image2:string,
    image3:string,
    image4:string
}