import { Injectable } from '@angular/core';
import { InventoryItem } from '../model/inventory.item.model';
import { OrderItem, Product, Sale, Supplier } from '../model/sale.model';
import { Stock } from '../model/stockmodel';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../model/countrymodel';
import { ProductCategory } from '../model/productcategorymodel';

@Injectable({
  providedIn: 'root'
})
export class AdmindashbordserviceService {

 
  private baseUrl="http://localhost:8089/api/"

  private inventory: InventoryItem[] = [];  
  private sales: Sale[] = [];  
  private suppliers: Supplier[] = [];  
  private stock:Stock[]=[];
  private country:Country[]=[];
  private orderItem:OrderItem[]=[];
  private category:ProductCategory[]=[];
  private product:Product[]=[];

  constructor(private http: HttpClient) {} 

  loadProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+"product").pipe(
      tap(data=>this.product=data)
    );
  }
  
  
  loadCategories():Observable<ProductCategory[]>{
    return this.http.get<ProductCategory[]>(this.baseUrl+"category").pipe(
      tap(data=>this.category=data)
    );
  }


  loadOrders():Observable<OrderItem[]>{
    return this.http.get<OrderItem[]>(this.baseUrl+"order/").pipe(
      tap(res=>this.orderItem=res)
    );
  }
  
  loadstocks(): Observable<Stock[]> {  
    return this.http.get<Stock[]>(this.baseUrl+"stock/").pipe(  
      tap(data => this.stock = data)  
    );  
  }  

  loadInventory(): Observable<InventoryItem[]> {  
    return this.http.get<InventoryItem[]>(this.baseUrl+"inventory/").pipe(  
      tap(data => this.inventory = data)  
    );  
  }  

  loadSales(): Observable<Sale[]> {  
    return this.http.get<Sale[]>(this.baseUrl+"sale/").pipe(  
      tap(data => this.sales = data)  
    );  
  }  

  loadSuppliers(): Observable<Supplier[]> {  
    return this.http.get<Supplier[]>(this.baseUrl+"supplier/").pipe(  
      tap(data => this.suppliers = data)  
    );  
  }

  loadCountries(): Observable<Country[]> {  
    return this.http.get<Country[]>(this.baseUrl+"country/").pipe(  
      tap(data => this.country = data)  
    );  
  }
 
  getCountry(): Country[] {  
    return this.country;  
  }  

  getStocks(): Stock[] {  
    return this.stock;  
  }  

  getInventory(): InventoryItem[] {  
    return this.inventory;  
  }  

  getSales(): Sale[] {  
    return this.sales;  
  }  

  getSuppliers(): Supplier[] {  
    return this.suppliers;  
  }  

  getSalesRevenueChartData(): { labels: string[], data: number[] } {  
    const labels = this.sales.map(sale => sale.productName);  
    const data = this.sales.map(sale => sale.totalPrice);  
    return { labels, data };  
  }
  
  

}
