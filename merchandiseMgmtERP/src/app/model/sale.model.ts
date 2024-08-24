//---------------------------------------- Sale ---------------------------------------------


//style Categories start
export class StyleCategories {
  id: number = 0
  name?: string;
}
//style Categories end
//Size start
export class Size {
  id: number = 0
  name?: string;
}
//Size end
//Trim start
export class Trim {
  id: number = 0
  name?: string;
}
//Fabric start (optional)
export class Fabric {
  id: number = 0
  name?: string;
  description?: string;
}
//Raw Material Categories start
export class RawMaterialCat {
  id: number = 0
  name?: string;
}


//---------------------------------------- Buyers Table ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



//  Buyers start
export class Buyers {
  id: number = 0
  organization?: string
  contactPerson?: string
  phone?: string
  email?: string
  address?: string
  country?: string
}
//  Task start
export class Task {
  id: number = 0
  name?: string
}
//  Orders Status start
export class OrderStatus {
  id: number = 0
  name?: string
}
//  Orders start
export class OrderDetails {
  id: number = 0
  oderDate?: Date
  deliveryDate?: Date
  shippingAddress?: string
  orderUniId?: string
  totalAmount?: number
  paid?: number
  samount?: number
  mamount?: number
  lamount?: number
  styleId?: {
    id: number
    code?: string
    description?: string
    categoriesId?: {
      id: number
      name?: string
    }
    createdAt?: Date
    updatedAt?: Date
  }
  buyersId?: {
    id: number
    organization?: string
    contactPerson?: string
    phone?: string
    email?: string
    address?: string
    country?: string
  }
  orStatusId?: {
    id: number
    name?: string
  }

}

//  Time Action start
export class TimeAction {
  id: number = 0
  remarks?: string
  expectedStartDate?: Date
  actualStartDate?: Date
  expectedEndDate?: Date
  actualEndDate?: Date
  orderId?: OrderDetails
  taskId?: Task
}
