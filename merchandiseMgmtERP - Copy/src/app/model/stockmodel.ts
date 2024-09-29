import { Product } from "./sale.model";
import { WareHouse } from "./warehouse.model";

export class Stock{


      id!:number;

     quantity!:number;

     createdAt!:Date;

     updatedAt!:Date;

     catagoryName!:string;

     wareHouse:WareHouse=new WareHouse();

     product:Product=new Product();


}