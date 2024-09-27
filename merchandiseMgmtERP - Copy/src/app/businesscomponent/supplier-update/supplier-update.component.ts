import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../model/sale.model';
import { SupplierService } from '../../services/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Country } from '../../model/countrymodel';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-supplier-update',
  templateUrl: './supplier-update.component.html',
  styleUrl: './supplier-update.component.css'
})
export class SupplierUpdateComponent implements OnInit{


  supplierId!: number;
  errorMessage: string = '';
  supplier:Supplier =new Supplier();
  suppliers: Supplier[] = []; 

 

  

  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router,
   
  ) { }

  ngOnInit(): void {
    this.supplierId = this.route.snapshot.params['id'];
    console.log(this.supplierId)
    this.loadSupplier();

    


  }

  loadSupplier() {
    this.supplierService.getSupplierById(this.supplierId).subscribe({
      next: response => {
        this.supplier = response;
        console.log(this.supplier);
      },
      error: error => {
        console.log(error)
        this.errorMessage = 'Could not load supplier';
      }
    });

    
  }



  updateSupplier(): void {
    if (this.supplier) {
      this.supplierService.updateSupplier(this.supplierId, this.supplier).subscribe({
        next: () => this.router.navigate(['/supplier']),  // Redirect after successful update  
        error: (error: HttpErrorResponse) => {
          this.errorMessage = 'An error occurred while updating the supplier';
        }
      });
    }
  }

}
