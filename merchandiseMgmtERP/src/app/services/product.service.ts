import { Injectable, NgModule } from '@angular/core';
import { Product } from '../model/sale.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:3000/product";

  constructor(private http: HttpClient) {}  
 
  createProduct(product: Product): Observable<Product> {  
    return this.http.post<Product>(`${this.baseUrl}`, product);  
  }  

  // Method to edit a product  
  editProduct(productId: string, updatedProduct: Product): Observable<boolean> {  
    return this.http.put<boolean>(`${this.baseUrl}/${productId}`, updatedProduct);  
  }  

  // Method to delete a product  
  deleteProduct(productId: string): Observable<boolean> {  
    return this.http.delete<boolean>(`${this.baseUrl}/${productId}`);  
  }  

  // Method to get all products  
  getProducts(): Observable<Product[]> {  
    return this.http.get<Product[]>(this.baseUrl);
  }  

  // Method to get a product by ID  
  getProductById(productId: string): Observable<Product> {  
    return this.http.get<Product>(`${this.baseUrl}/${productId}`); 
  }  
}