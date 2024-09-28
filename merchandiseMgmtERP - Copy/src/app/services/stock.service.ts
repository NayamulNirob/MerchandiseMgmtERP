import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
private baseUrl="http://localhost:8089/api/stock"

// private sales: Sale[] = []; 
//   private newSale:Sale=new Sale(); 

//   constructor(private http: HttpClient) {}  

//   loadSales(): Observable<Sale[]> {  
//     return this.http.get<Sale[]>(this.baseUrl+"/");
//   }  

//   addSales(item: Sale): Observable<Sale> {
//     return this.http.post<Sale>(this.baseUrl + "/save", item);
//   }


//   getSales(): Sale[] {  
//     return this.sales;  
//   }  

//   recordSale(sale: Sale) : Observable<Sale> {
//     return this.http.post<Sale>(this.baseUrl + "/save", sale); 
//   }  

//   // updateSale(saleId: number, updatedSale: Partial<Sale>) {  
//   //   const sale = this.sales.find(s => s.id === saleId);  
//   //   if (sale) {  
//   //     Object.assign(sale, updatedSale);  
//   //   }  
//   // }  

//   updateSale(saleId: number, updatedSale: Sale): Observable<Sale> {
//     return this.http.put<Sale>(`${this.baseUrl}/update/${saleId}`, updatedSale);

//   }



//   removeSale(saleId: number) {  
//     return this.http.delete(`${this.baseUrl}/delete/${saleId}`, {responseType:'text'});
//   }  

//   generateSalesReport() {  
//     const totalSales = this.sales.reduce((sum, sale) => sum + sale.totalPrice, 0);  
//     const report = {  
//       totalSalesCount: this.sales.length,  
//       totalRevenue: totalSales  
//     };  
//     return report;  
//   }  

//   filterSales(searchTerm: string): Sale[] {  
//     return this.sales.filter(sale =>  
//       sale.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||  
//       sale.customerName.toLowerCase().includes(searchTerm.toLowerCase())  
//     );  
//   } 
  
//   getSalesById(saleid:number): Observable<any> {  
//     return this.http.get<any>(`${this.baseUrl}/${saleid}`);
//   }  

}
