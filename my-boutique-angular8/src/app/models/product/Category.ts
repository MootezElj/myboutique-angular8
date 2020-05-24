import { AbstractEntity } from '../commons/AbstractEntity';
import { Department } from './Department';

export interface Category extends AbstractEntity{
    name: string,
    description: string,
    price: BigInteger,
    quantity: number,
    status: string,
    salesCounter: number
    department: Department
    
}