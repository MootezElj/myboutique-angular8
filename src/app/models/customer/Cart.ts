import { Customer } from './Customer';

export interface Cart{
    id?:number,
    orderId?:number;
    customer?:Customer;
    status:string;
}

    
