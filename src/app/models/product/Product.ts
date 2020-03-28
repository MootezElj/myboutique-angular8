import { Review } from './Review';
import { Category } from './Category';
import { AbstractEntity } from '../commons/AbstractEntity';

export interface Product extends AbstractEntity{
    name: string,
    description: string,
    price: BigInteger,
    quantity: number,
    status: string,
    salesCounter: number
    reviews?:Review[],
    category:Category;
    image:string
}