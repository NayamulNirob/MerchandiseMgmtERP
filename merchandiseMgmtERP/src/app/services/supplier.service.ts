// supplier.service.ts  
import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { tap } from 'rxjs/operators';  
import { Supplier } from '../model/sale.model';

@Injectable({  
  providedIn: 'root'  
})  
export class SupplierService {  

  private baseUrl = "http://localhost:3000/Supplier";

  private suppliers: Supplier[] = [];  

  constructor(private http: HttpClient) {}  

  loadSuppliers(): Observable<Supplier[]> {  
    return this.http.get<Supplier[]>('../../../db.json').pipe(  
      tap(data => this.suppliers = data)  
    );  
  }  

  getSuppliers(): Supplier[] {  
    return this.suppliers;  
  }  

  addSupplier(supplier: Supplier) {  
    this.suppliers.push(supplier);  
  }  

  updateSupplier(supplierId: number, updatedSupplier: Partial<Supplier>) {  
    const supplier = this.suppliers.find(s => s.id === supplierId);  
    if (supplier) {  
      Object.assign(supplier, updatedSupplier);  
      supplier.updatedAt = new Date(); // Update timestamp  
    }  
  }  

  removeSupplier(supplierId: number) {  
    this.suppliers = this.suppliers.filter(s => s.id !== supplierId);  
  }  

  filterSuppliers(searchTerm: string): Supplier[] {  
    return this.suppliers.filter(supplier =>  
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||  
      supplier.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())  
    );  
  }  

  sortSuppliers(by: 'name' | 'contactPerson' | 'email'): Supplier[] {  
    return this.suppliers.sort((a, b) => {  
      if (a[by] < b[by]) return -1;  
      if (a[by] > b[by]) return 1;  
      return 0;  
    });  
  }  
}
