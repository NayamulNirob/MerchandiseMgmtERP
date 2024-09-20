// customer.service.ts  
import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { tap } from 'rxjs/operators';  
import { Customer } from '../model/sale.model';

@Injectable({  
  providedIn: 'root'  
})  
export class CustomerService { 
  
  private baseUrl = "http://localhost:8089/api/customer"; 

  private customers: Customer[] = []; 
  private customer:Customer=new Customer(); 

  constructor(private http: HttpClient) {}  


  getCustomers():Observable <Customer[]> {  
    return this.http.get<Customer[]>(this.baseUrl+"/").pipe(  
      tap(data => this.customers = data) );  
  } 
  

  // updateCustomer(customerId: number, updatedCustomer: Partial<Customer>) {  
  //   const customer = this.customers.find(c => c.id === customerId);  
  //   if (customer) {  
  //     Object.assign(customer, updatedCustomer);  
  //     customer.updatedAt = new Date(); 
  //   }  
  // } 

  updateCustomer(customerId:number,updatedCustomer:Customer):Observable<Customer>{
    return this.http.put<Customer>(`${this.baseUrl}/delete/${customerId}`,updatedCustomer);
  }
  
  
  addCustomer(customer: Customer): Observable<Customer> {
    
    return this.http.post<Customer>(this.baseUrl + "/save", customer);
  }
  

  removeCustomer(customerId: number) {  
    return this.http.delete(`${this.baseUrl}/delete/${customerId}`, { responseType: 'text' });
       
  }  

  filterCustomers(searchTerm: string): Customer[] {  
    return this.customers.filter(customer =>  
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||  
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())  
    );  
  }  
}