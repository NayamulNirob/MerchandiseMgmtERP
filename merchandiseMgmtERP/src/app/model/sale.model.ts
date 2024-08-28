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

// supplier.model.ts  
export class Supplier {  
  constructor(  
    public id: number,  
    public name: string,  
    public contactPerson: string,  
    public email: string,  
    public phone: string,  
    public address: string,  
    public createdAt: Date,  
    public updatedAt: Date  
  ) {}  
}

// sale.model.ts  
export class Sale {  
  constructor(  
    public id: number,  
    public productName: string,  
    public quantity: number,  
    public price: number,  
    public totalAmount: number,  
    public customerName: string,  
    public saleDate: Date  
  ) {}  
}

// customer.model.ts  
export class Customer {  
  constructor(  
    public id: number,  
    public name: string,  
    public email: string,  
    public phone: string,  
    public address: string,  
    public createdAt: Date,  
    public updatedAt: Date  
  ) {}  
}


// registration.model.ts  
export interface RegistrationData {  
  username: string;  
  email: string;  
  password: string;  
  rememberMe: boolean;  
  
}

