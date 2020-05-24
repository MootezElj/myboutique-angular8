import { AbstractEntity } from '../commons/AbstractEntity';
import { Payment } from './Payment';
import { Address } from './Address';

export interface Order extends AbstractEntity{
    id:number,
    totalPrice:number,
    status:string,
    shipped:Date,
    payment: Payment,
    shipmentAddress:Address
}
