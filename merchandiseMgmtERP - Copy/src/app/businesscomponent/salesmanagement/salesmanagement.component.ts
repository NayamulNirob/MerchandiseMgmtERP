
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
  products: Product[] = [];
  customers: Customer[] = [];
  orderItem: OrderItem[] = [];

  constructor(
    private salesService: SalesService,
    private productService: ProductService,
    private customerService: CustomerService,
    private router: Router,
    private orderItemService: OrderService
  ) {}

  ngOnInit(): void {
    this.loadSales();

    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });

    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });

    this.orderItemService.loadOrders().subscribe({
      next: res => {
        this.orderItem = res;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  onProductChange() {
    if (this.newSale.product) {
      const selectedOrderItem = this.orderItem.find(orderItem => orderItem.product.id === this.newSale.product.id);

      if (selectedOrderItem) {
        // Populate the quantity and customer from the order item
        this.newSale.quantity = selectedOrderItem.quantity;
        this.newSale.customer = selectedOrderItem.customer;
      }
    }
  }

  loadSales() {
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
        this.loadSales();
      },
      error: error => {
        console.log('Error saving Sales:', error);
      }
    });

    this.resetNewSale();
  }

  removeSale(saleId: number) {
    this.salesService.removeSale(saleId).subscribe({
      next: res => {
        console.log('Sale removed successfully');
        this.updateFilteredSales();
      },
      error: err => {
        console.error('Error removing sale:', err);
      }
    });
  }

  generateSalesReport() {
    const totalRevenue = this.sales.reduce((sum, sale) => sum + sale.totalPrice, 0);
    const totalSalesCount = this.sales.length;

    alert(`Total Sales Count: ${totalSalesCount}, Total Revenue: ${totalRevenue}`);
  }

  filterSales() {
    const lowerSearchTerm = this.searchTerm.toLowerCase();

    this.filteredSales = this.sales.filter(sale =>
      sale.product.name.toLowerCase().includes(lowerSearchTerm) ||
      sale.customer.name.toLowerCase().includes(lowerSearchTerm)
    );
  }

  private updateFilteredSales() {
    this.filteredSales = [...this.sales]; // Create a copy of the sales list
  }

  private resetNewSale() {
    this.newSale = new Sale(); // Reset the sale form
  }



}