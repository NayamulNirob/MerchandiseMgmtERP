import { Component } from '@angular/core';
import { OrderItem } from '../../model/sale.model';
import { OrderService } from '../../services/ordermanagement.service';

@Component({
  selector: 'app-ordermanagement',
  templateUrl: './ordermanagement.component.html',
  styleUrl: './ordermanagement.component.css'
})
export class OrdermanagementComponent {
// order-management.component.ts  
 
  orders: OrderItem[] = [];  
  filteredOrders: OrderItem[] = [];  
  searchTerm: string = '';  
  sortBy: 'customerName' | 'orderDate' | 'totalPrice' = 'customerName';  
  newOrder: OrderItem = new OrderItem(0, '', '', 1, 'Pending', new Date(), 0);  

  constructor(private orderService: OrderService) {}  

  ngOnInit(): void {  
    this.orderService.loadOrders().subscribe(data => {  
      this.orders = data;  
      this.filteredOrders = data; // Initialize filtered orders  
    });  
  }  

  createOrder() {  
    // Assign a simple unique ID  
    this.newOrder.id = this.orders.length + 1;   
    this.newOrder.orderDate = new Date();  
    // Calculate total price (let's assume a fixed price for simplicity)  
    this.newOrder.totalPrice = this.newOrder.quantity * 20; // Assuming each item costs 20  
    
    this.orderService.createOrder(this.newOrder);  
    this.updateFilteredOrders();  
    this.resetNewOrder();  
  }  

  updateOrder(orderId: number, status: string) {  
    this.orderService.updateOrder(orderId, { status });  
    this.updateFilteredOrders();  
  }  

  deleteOrder(orderId: number) {  
    this.orderService.deleteOrder(orderId);  
    this.updateFilteredOrders();  
  }  

  filterOrders() {  
    this.filteredOrders = this.orderService.filterOrders(this.searchTerm);  
  }  

  sortOrders() {  
    this.filteredOrders = this.orderService.sortOrders(this.sortBy);  
  }  

  private updateFilteredOrders() {  
    this.filteredOrders = this.orderService.getOrders();  
  }  

  private resetNewOrder() {  
    this.newOrder = new OrderItem(0, '', '', 1, 'Pending', new Date(), 0);  
  }  
}

