import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { SubcategoryService } from '../services/subcategory.service';
import { SupplierService } from '../services/supplier.service';
import { AdmindashbordserviceService } from '../services/admindashbordservice.service';
import { Country } from '../model/countrymodel';
import { OrderItem, Product, Sale } from '../model/sale.model';
import { ProductCategory } from '../model/productcategorymodel';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit{
  country:Country[]=[];
  orderItem:OrderItem[]=[];
  productCategories:ProductCategory[]=[];
  product:Product[]=[];
  sales:Sale[]=[];
 

  constructor(
  private adminDashbordService:AdmindashbordserviceService) { }

  ngOnInit(): void {
    this.loadCountries();
    this.loadProductCategories();
    this.loadOrders();
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

  
  loadProducts(): void {
    this.adminDashbordService.loadProducts().subscribe({
      next: res => {
        this.product = res;
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }

  loadCountries(){
    this.adminDashbordService.loadCountries().subscribe({
      next:res=>{
        this.country=res
      },
      error:err=>{
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

  loadOrders(){
    this.adminDashbordService.loadOrders().subscribe({
      next:res=>{
        this.orderItem=res
      },
      error:err=>{
        console.error(err)
      }
    });
  }
  loadProductCategories(){
    this.adminDashbordService.loadCategories().subscribe({
      next:res=>{
        this.productCategories=res
      },
      error:err=>{
        console.log(err)
      }
    });
  }

  

  
}
