import { AbstractEntity } from '../commons/AbstractEntity';
import { Product } from '../product/Product';
import { Address } from 'cluster';

export interface Payment{
	id:number,
	paypalPaymentId:number,
	status:string,
	orderId:number
}
