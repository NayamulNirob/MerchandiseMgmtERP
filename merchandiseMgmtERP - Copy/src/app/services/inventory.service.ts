// inventory.service.ts  
import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { tap } from 'rxjs/operators';  
import { InventoryItem, Product } from '../model/sale.model';

@Injectable({  
  providedIn: 'root'  
})  
export class InventoryService {  

  private baseUrl = "http://localhost:8089/api/inventory";  

  private inventory: InventoryItem[] = [];
  private product:Product=new Product();  
  
  constructor(private http: HttpClient) {}


  loadInventory(): Observable<InventoryItem[]> {  
    return this.http.get<InventoryItem[]>(this.baseUrl+"/").pipe(  
      tap(data => this.inventory = data)  
    );  
  }  




  getInventory(): InventoryItem[] {  
    return this.inventory;  
  }  

  addInventoryItem(item: InventoryItem):Observable<InventoryItem> {  
   return this.http.post<InventoryItem>(this.baseUrl,item).pipe(
    tap(data=>this.inventory.push(data))
   );
    
  }  


  updateStock(productId: number, quantity: number): Observable<InventoryItem> {  
    const product = this.inventory.find(p => p.id === productId);  
    if (product) {  
      product.stock += quantity;  
      return this.http.put<InventoryItem>(`${this.baseUrl}/${productId}`, product);  
    }  
    throw new Error('Product not found');  
  } 

  

  manageLocation(productId: number, location: string): Observable<InventoryItem> {  
    const product = this.inventory.find(p => p.id === productId);  
    if (product) {  
      product.location = location;  
      return this.http.put<InventoryItem>(`${this.baseUrl}/${productId}`, product);  
    }  
    throw new Error('Product not found');  
  } 


  filterInventory(searchTerm: string): InventoryItem[] {  
    return this.inventory.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));  
  }  

  sortInventory(by: 'name' | 'stock' | 'price'): InventoryItem[] {  
    return this.inventory.sort((a, b) => {  
      if (a[by] < b[by]) return -1;  
      if (a[by] > b[by]) return 1;  
      return 0;  
    });  
  }
  
  deleteInventoryItem(productId: number): Observable<void> {  
    return this.http.delete<void>(`${this.baseUrl}/${productId}`).pipe(  
      tap(() => {  
        this.inventory = this.inventory.filter(item => item.id !== productId); // Update local inventory after deletion  
      })  
    );  
  }  
}
