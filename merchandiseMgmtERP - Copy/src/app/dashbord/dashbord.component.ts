import { Component, OnInit } from '@angular/core';
import { AdmindashbordserviceService } from '../services/admindashbordservice.service';
import { Country } from '../model/countrymodel';
import { OrderItem, Product, Sale } from '../model/sale.model';
import { ProductCategory } from '../model/productcategorymodel';
import { Transaction } from '../model/transactionmodel';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit {
  country: Country[] = [];
  orderItem: OrderItem[] = [];
  product: Product[] = [];
  sales: Sale[] = [];
  productCategory: ProductCategory[] = [];
  selectedProduct: Product | null = null;
  transaction: Transaction[] = [];
  totalAmount:number=0;



  constructor(
    private adminDashbordService: AdmindashbordserviceService) { }

  ngOnInit(): void {
    this.loadCountries();
    this.loadOrders();
    this.loadProducts();
    this.loadCategory();
    this.loadTransactions();

  }

 

  loadTransactions() {
    this.adminDashbordService.loadtransactions().subscribe({
      next: res => {
        this.transaction = res
      },
      error:err=>{
        console.log(err)
      }
    });
  }
  

  loadCategory() {
    this.adminDashbordService.loadCategories().subscribe({
      next: res => {
        this.productCategory = res
      },
      error: err => {
        console.error(err)
      }
    });
  }

  generateSalesReport() {
    const totalRevenue = this.sales.reduce((sum, sale) => sum + sale.totalPrice, 0);
    const totalSalesCount = this.sales.length;

    alert(`Total Sales Count: ${totalSalesCount}, Total Revenue: ${totalRevenue}`);


    //   document.getElementById('totalRevenue').innerText = `$${totalRevenue}`;
    // document.getElementById('totalSalesCount').innerText = `${totalSalesCount}`;
  }


  loadSales(): void {
    this.adminDashbordService.loadSales().subscribe({
      next: res => {
        this.sales = res;
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }


  // loadProducts(): void {
  //   this.adminDashbordService.loadProducts().subscribe({
  //     next: res => {
  //       this.product = res;
  //     },
  //     error: error => {
  //       console.log(error);
  //       alert(error);
  //     }
  //   });
  // }

  // selectedProduct = this.product[0];


  loadProducts(): void {
    this.adminDashbordService.loadProducts().subscribe({
      next: res => {
        this.product = res;
        if (this.product.length > 0) {
          this.selectedProduct = this.product[0]; // Set default selected product
        }
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }

  updateSelectedProduct(event: any) {
    const activeIndex = event.to;
    this.selectedProduct = this.product[activeIndex];
  }





  loadCountries() {
    this.adminDashbordService.loadCountries().subscribe({
      next: res => {
        this.country = res
      },
      error: err => {
        console.log(err);
      }
    });
  }

  maxSale: number = 1000000;  // Example maximum sale value

  getProgressColor(percentage: number): string {
    if (percentage < 40) {
      return 'red';
    } else if (percentage >= 40 && percentage < 65) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  loadOrders() {
    this.adminDashbordService.loadOrders().subscribe({
      next: res => {
        this.orderItem = res
      },
      error: err => {
        console.error(err)
      }
    });
  }





}
