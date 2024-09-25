import { Injectable } from '@angular/core';
import { ProductCategory } from '../model/productcategorymodel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductcategoryService {

  private baseUrl="http://localhost:8089/api/category"

  private productCategories: ProductCategory[] = [];

  private newproductCategories:ProductCategory=new ProductCategory();

  constructor(private http:HttpClient) { }

  
  getProductCatagories(): Observable<ProductCategory[]> {  
    return this.http.get<ProductCategory[]>(this.baseUrl+"/");
  } 
 
  createProductCategory(category: ProductCategory): Observable<ProductCategory> {  
    return this.http.post<ProductCategory>(this.baseUrl+"/save", category);  
  }  

  editProductCategory(categoryId: number, updatedCategory:ProductCategory ): Observable<ProductCategory> {  
    return this.http.put<ProductCategory>(`${this.baseUrl}/update/${categoryId}`, updatedCategory);  
  }  

  deleteProductCategory(categoryId: number) {  
    return this.http.delete(`${this.baseUrl}/delete/${categoryId}`, { responseType: 'text' });  
  }  
 


  getProductCategoryById(categoryId: number):Observable<any> {  
    return this.http.get<any>(`${this.baseUrl}/${categoryId}`); 
  }  


}
