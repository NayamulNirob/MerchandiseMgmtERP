// customer-management.component.ts  
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/sale.model';
import { CustomerService } from '../../services/customermanagement.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-customer-management',
  templateUrl: './customermanagement.component.html',
  styleUrls: ['./customermanagement.component.css'],
  providers: [DatePipe]
})
export class CustomerManagementComponent implements OnInit {
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  searchTerm: string = '';
  newCustomer: Customer = new Customer();

  constructor(private customerService: CustomerService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  
  formatDateTime(date: string | Date) {
    return this.datePipe.transform(date, 'd MMM, y HH:mm:ss a');
  }

  

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
      this.filteredCustomers = data; 
    });
  }



  addCustomer() {

    this.customerService.addCustomer(this.newCustomer).subscribe({
      next: res => {
        
        alert('Customer saved successfully!');
        this.newCustomer.createdAt = new Date();
        this.newCustomer.updatedAt = new Date();
        this.loadCustomer();
      },
      error: error => {
        console.log('Error saving Customer:', error);
      }
    });
    this.updateFilteredCustomers();
    this.resetNewCustomer();
  }



  updateCustomer(customerId: number) {

    this.router.navigate(['updatecustomer',customerId]);
  }

  removeCustomer(customerId: number) {
    this.customerService.removeCustomer(customerId);
    this.updateFilteredCustomers();
  }

  filterCustomers() {
    this.filteredCustomers = this.customerService.filterCustomers(this.searchTerm);
  }

  private updateFilteredCustomers() {
    // this.filteredCustomers = this.customerService.getCustomers();  
  }

  private resetNewCustomer() {
    this.newCustomer = new Customer();
  }
}