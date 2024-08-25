// -----------------------------------product-------------------------------
export interface Product {  
  id: number;  
  name: string;  
  description: string;  
  price: number;  
  quantity: number;  
}

// -----------------------------------product-------------------------------

// inventory-item.model.ts--------------------------------------------------  
export class InventoryItem {  
  constructor(  
    public id: number,  
    public name: string,  
    public stock: number,  
    public location: string,  
    public description: string,  
    public price: number  
  ) {}  
}

// inventory-item.model.ts--------------------------------------------------  

// order-item.model.ts  
export class OrderItem {  
  constructor(  
    public id: number,  
    public customerName: string,  
    public product: string,  
    public quantity: number,  
    public status: string,  
    public orderDate: Date,  
    public totalPrice: number  
  ) {}  
}