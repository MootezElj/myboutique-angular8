import { AbstractEntity } from '../commons/AbstractEntity';

export interface Category extends AbstractEntity{
    name: string,
    description: string,
    price: BigInteger,
    quantity: number,
    status: string,
    salesCounter: number
    
    
}