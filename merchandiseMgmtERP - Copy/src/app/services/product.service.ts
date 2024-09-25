import { Injectable, NgModule } from '@angular/core';
import { Product } from '../model/sale.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8089/api/product";

  
  private products: Product[] = [];

  private newProducts:Product=new Product();

  constructor(private http: HttpClient) {}  

  
   
  getProducts(): Observable<Product[]> {  
    return this.http.get<Product[]>(this.baseUrl+"/");
  } 
 
  createProduct(product: Product): Observable<Product> {  
    return this.http.post<Product>(this.baseUrl+"/save", product);  
  }  

  
  editProduct(productId: number, updatedProduct: Product): Observable<Product> {  
    return this.http.put<Product>(`${this.baseUrl}/update/${productId}`, updatedProduct);  
  }  


  deleteProduct(productId: number) {  
    return this.http.delete(`${this.baseUrl}/delete/${productId}`, { responseType: 'text' });  
  }  
 

  
  getProductById(productId: number):Observable<any> {  
    return this.http.get<any>(`${this.baseUrl}/${productId}`); 
  }  


  getByProducts(): Product[] {
    return this.products;
  }

  getByProduct():Product{
    return this.newProducts;
  }

  filterProducts(searchTerm: string): Product[] {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.productCode.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  sortProducts(by: 'name' | 'productCode' | 'description'): Product[] {
    return this.products.sort((a, b) => {
      if (a[by] < b[by]) return -1;
      if (a[by] > b[by]) return 1;
      return 0;
    });
  }


  

  
}