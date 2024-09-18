// supplier-management.component.ts  
import { Component, OnInit } from '@angular/core';  
import { Supplier } from '../../model/sale.model';
import { SupplierService } from '../../services/supplier.service';
import { Router } from '@angular/router';


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
  newSupplier: Supplier = new Supplier();  

  constructor(private supplierService: SupplierService,
    private router:Router
  ) {}  

  ngOnInit(): void {  
    this.supplierService.loadSuppliers().subscribe(
      data => {  
      this.suppliers = data;  
      this.filteredSuppliers = data; 
    });  
  }  

  addSupplier() {  
    this.newSupplier.id = this.suppliers.length + 1; // Simple ID generation  
    this.newSupplier.createdAt = new Date();  
    this.newSupplier.updatedAt = new Date();  

    this.supplierService.addSupplier(this.newSupplier).subscribe(() => {  
      this.updateFilteredSuppliers();  
      this.resetNewSupplier();  
    }); 
  }  



  updateSupplier(supplierId: number, ) {  
    this.router.navigate(['updatesupplier',supplierId]);
}
  

  removeSupplier(supplierId: number) {  
    this.supplierService.removeSupplier(supplierId).subscribe({  
      next: () => {  
        this.supplierService.loadSuppliers().subscribe(data => {  
          this.suppliers = data;  
          this.filteredSuppliers = data;  
        });  
      },  
      error: (err) => {  
        console.error('Delete failed', err); 
      }  
    });  
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
    this.newSupplier = new Supplier();  
  }  
}
