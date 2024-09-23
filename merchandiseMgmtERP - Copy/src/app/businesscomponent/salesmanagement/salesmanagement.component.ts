// sales-management.component.ts  
import { Component, OnInit } from '@angular/core';  
import { Customer, OrderItem, Product, Sale } from '../../model/sale.model';
import { SalesService } from '../../services/sale.service';
import { ProductService } from '../../services/product.service';
import { CustomerService } from '../../services/customermanagement.service';
import { Router } from '@angular/router';
import { OrderService } from '../../services/ordermanagement.service';

@Component({  
  selector: 'app-sales-management',  
  templateUrl: './salesmanagement.component.html',  
  styleUrls: ['./salesmanagement.component.css']  
})  
export class SalesManagementComponent implements OnInit {  
  sales: Sale[] = [];  
  filteredSales: Sale[] = [];  
  searchTerm: string = '';  
  newSale: Sale = new Sale();  
  products: Product[] =[];
  customers:Customer[]=[];
  orders:OrderItem=new OrderItem;



  constructor(private salesService: SalesService,
    private productService:ProductService,
    private customerService:CustomerService,
    private router:Router,
    private orderItemService:OrderService
  ) {}  

  ngOnInit(): void {  
  this.loadSaless();

  this.productService.getProducts().subscribe(data => {
    this.products = data;
  });

  this.customerService.getCustomers().subscribe(data=>{
    this.customers=data;
  });
  }  




  onProductChange() {
    if (this.newSale.product) {
      const selectedProduct = this.products.find(p => p.id === this.newSale.product.id);
      if (selectedProduct) {
        this.newSale.product.price = selectedProduct.price;
      }
    }
  }


  loadSaless() {
    this.salesService.loadSales().subscribe(data => {
      this.sales = data;
      this.filteredSales = data; 
    });
  }

  recordSale() {  
    

    this.newSale.saleDate = new Date();  

    this.salesService.recordSale(this.newSale).subscribe({
      next: res => {
        console.log('Sales saved successfully:', res);
        alert('Sales saved successfully!');
        this.updateFilteredSales();  
        this.loadSaless();
      },
      error: error => {
        console.log('Error saving Sales:',error);
      }
    });;  
    
    this.resetNewSale();  
  }  

  // updateSale(saleId: number) {  
  //   const updatedSale: Partial<Sale> = { quantity: 5, price: 30 }; // Example updates  
  //   this.salesService.updateSale(saleId, updatedSale);  
  //   this.updateFilteredSales();  
  // }  

  removeSale(saleId: number) {  
    this.salesService.removeSale(saleId);  
    this.updateFilteredSales();  
  }  

  generateSalesReport() {  
    const report = this.salesService.generateSalesReport();  
    console.log('Sales Report:', report);  
    alert(`Total Sales Count: ${report.totalSalesCount}, Total Revenue: ${report.totalRevenue}`);  
  }  

  filterSales() {  
    this.filteredSales = this.salesService.filterSales(this.searchTerm);  
  }  

  private updateFilteredSales() {  
    this.filteredSales = this.salesService.getSales();  
  }  

  private resetNewSale() {  
    this.newSale = new Sale();  
  }  





}