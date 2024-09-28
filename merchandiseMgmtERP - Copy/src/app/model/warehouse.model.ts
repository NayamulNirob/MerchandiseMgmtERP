import { Product } from "./sale.model";

export class WareHouse {

    id!: number;
    name!: string;
    location!: string;
    capacity!: number;
    contact!:string;   
    product:Product=new Product();
}