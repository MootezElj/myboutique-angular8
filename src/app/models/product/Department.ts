import { Review } from './Review';
import { Category } from './Category';
import { AbstractEntity } from '../commons/AbstractEntity';

export interface Department extends AbstractEntity{
    depName: string,
    description: string,
    image:string,
    categories: Category[]
}