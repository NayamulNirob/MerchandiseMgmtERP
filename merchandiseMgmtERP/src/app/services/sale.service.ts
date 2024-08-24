import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Buyers, OrderDetails, OrderStatus,  RawMaterialCat, Size,StyleCategories,  Task, TimeAction, Trim } from '../model/sale.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SaleService {

  baseUrl = "http://localhost:3000/"

  constructor(private http: HttpClient) { }


  

  //---------------------------------------- Buyers Table--------------------------------------------



  // api Buyers start
  getAllBuyers(): Observable<Buyers[]> {
    return this.http.get<Buyers[]>(`${this.baseUrl}`);
  }

  createBuyers(buyer: Buyers): Observable<Buyers> {
    return this.http.post<Buyers>(`${this.baseUrl}`, buyer);
  }

  updateBuyers(id: number, buyer: Buyers): Observable<Buyers> {
    return this.http.put<Buyers>(`${this.baseUrl}/${id}`, buyer)
  }

  deleteBuyers(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`)
  }

  //api Buyer End 

  


}
