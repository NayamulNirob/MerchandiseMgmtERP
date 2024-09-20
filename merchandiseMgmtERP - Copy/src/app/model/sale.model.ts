import { InventoryItem } from "./inventory.item.model";


// -----------------------------------product-------------------------------
export class Product {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  
}

// -----------------------------------product-------------------------------

// order-item.model.ts  
export class OrderItem {

  id!: string;
  quantity!: number;
  status!: string;
  orderDate!: Date;
  totalPrice!: number;
  customer:Customer=new Customer();
  product:Product=new Product();
}

// supplier.model.ts  
export class Supplier {
  id!: number;
  name!: string;
  contactPerson!: string;
  email!: string;
  phone!: string;
  address!: string;
  createdAt!: Date;
  updatedAt!: Date;
  status!:string;
  product: Product = new Product();
}

// sale.model.ts  
export class Sale {
  id!: number;
  productName!: string;
  quantity!: number;
  price!: number;
  totalAmount!: number;
  customerName!: string;
  saleDate!: Date;
  product:Product=new Product();
  customer:Customer=new Customer();
  inventory:InventoryItem=new InventoryItem();
}

// customer.model.ts  
export class Customer {
  id!: number;
  name!: string;
  email!: string;
  phone!: string;
  address!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

// registration.model.ts  
export class UserModel {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  photo!: string;
  role!: string;
}


export interface AuthResponse {
  token: string;
  user: UserModel;


}


