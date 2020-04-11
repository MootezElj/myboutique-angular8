import { AbstractEntity } from '../commons/AbstractEntity';
import { Product } from './Product';

export interface Review  extends AbstractEntity{
    name: string,
    title: string,
    description: BigInteger,
    rating: number,
    product: Product
}