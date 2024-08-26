import { Injectable, NgModule } from '@angular/core';
import { Product } from '../model/sale.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:3000/product"; // Adjust this URL to match your backend  
  private products: Product[] = [];  
  private nextId: number = 1; // For unique IDs  

  constructor(private http: HttpClient) {}  

  // Method to load products from a JSON file or API  
  loadProducts(): Observable<Product[]> {  
    return this.http.get<Product[]>(this.baseUrl)  
      .pipe(  
        map(data => {  
          this.products = data; // Store products in the service  
          this.nextId = data.length ? Math.max(...data.map(product => product.id)) + 1 : 1; // Calculate the next ID  
          return data;  
        })  
      );  
  }
  
 

  // Method to add a product  
  addProduct(product: Product): Observable<Product> {  
    product.id = this.nextId++; // Assign a unique ID  
    return this.http.post<Product>(this.baseUrl, product);  
  }  

  // Method to edit a product  
  editProduct(productId: number, updatedProduct: Product): Observable<boolean> {  
    return this.http.put<boolean>(`${this.baseUrl}/${productId}`, updatedProduct);  
  }  

  // Method to delete a product  
  deleteProduct(productId: number): Observable<boolean> {  
    return this.http.delete<boolean>(`${this.baseUrl}/${productId}`);  
  }  

  // Method to get all products  
  getProducts(): Product[] {  
    return this.products; // This will return the products loaded from the server  
  }  

  // Method to get a product by ID  
  getProductById(productId: number): Product | undefined {  
    return this.products.find(p => p.id === productId);  
  }  
}