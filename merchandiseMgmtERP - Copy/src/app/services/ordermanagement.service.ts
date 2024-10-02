// order.service.ts  
import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { tap } from 'rxjs/operators';  
import { Customer, OrderItem, Product } from '../model/sale.model';

@Injectable({  
  providedIn: 'root'  
})  
export class OrderService {  
  private baseUrl = "http://localhost:8089/api/order"; 
  private orders: OrderItem[] = [];  
  private order:OrderItem=new OrderItem();
  private products:Product =new Product()
  private customers:Customer =new Customer();

  constructor(private http: HttpClient) {}  

  loadOrders(): Observable<OrderItem[]> {  
    return this.http.get<OrderItem[]>(this.baseUrl+"/").pipe(  
      tap(data => this.orders = data)  
    );  
  }  

  getOrders(): OrderItem[] {  
    return this.orders;  
  }  

  createOrder(order: OrderItem):Observable<OrderItem> {  
    return this.http.post<OrderItem>(this.baseUrl+"/save",order).pipe(
      tap(newOrder=>this.orders.push(newOrder))
    )  
  }  

  updateOrder(orderId: string, updatedOrder: Partial<OrderItem>) {  
    const order = this.orders.find(o => o.id === orderId);  
    if (order) {  
      Object.assign(order, updatedOrder);  
    }  
  }  

  


  deleteOrder(orderId: string): Observable<OrderItem> {  
    return this.http.delete<OrderItem>(`${this.baseUrl}/${orderId}`).pipe(  
      tap(() => {  
        
        this.orders = this.orders.filter(o => o.id !== orderId);  
      })  
    );  
}


}