// supplier-management.component.ts  
import { Component, OnInit } from '@angular/core';  
import { Supplier } from '../../model/sale.model';
import { SupplierService } from '../../services/supplier.service';


@Component({  
  selector: 'app-supplier-management',  
  templateUrl: './suppliermanagement.component.html',  
  styleUrls: ['./suppliermanagement.component.css']  
})  
export class SupplierManagementComponent implements OnInit {  
  suppliers: Supplier[] = [];  
  filteredSuppliers: Supplier[] = [];  
  searchTerm: string = '';  
  sortBy: 'name' | 'contactPerson' | 'email' = 'name';  
  newSupplier: Supplier = new Supplier(0, '', '', '', '', '', new Date(), new Date());  

  constructor(private supplierService: SupplierService
  ) {}  

  ngOnInit(): void {  
    this.supplierService.loadSuppliers().subscribe(data => {  
      this.suppliers = data;  
      this.filteredSuppliers = data; // Initialize filtered suppliers  
    });  
  }  

  addSupplier() {  
    this.newSupplier.id = this.suppliers.length + 1; // Simple ID generation  
    this.newSupplier.createdAt = new Date();  
    this.newSupplier.updatedAt = new Date();  

    this.supplierService.addSupplier(this.newSupplier);  
    this.updateFilteredSuppliers();  
    this.resetNewSupplier();  
  }  

  updateSupplier(supplierId: number, contactPerson: string, email: string, phone: string) {  
    this.supplierService.updateSupplier(supplierId, { contactPerson, email, phone });  
    this.updateFilteredSuppliers();  
  }  

  removeSupplier(supplierId: number) {  
    this.supplierService.removeSupplier(supplierId);  
    this.updateFilteredSuppliers();  
  }  

  filterSuppliers() {  
    this.filteredSuppliers = this.supplierService.filterSuppliers(this.searchTerm);  
  }  

  sortSuppliers() {  
    this.filteredSuppliers = this.supplierService.sortSuppliers(this.sortBy);  
  }  

  private updateFilteredSuppliers() {  
    this.filteredSuppliers = this.supplierService.getSuppliers();  
  }  

  private resetNewSupplier() {  
    this.newSupplier = new Supplier(0, '', '', '', '', '', new Date(), new Date());  
  }  
}
