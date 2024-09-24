import { Component, OnInit } from '@angular/core';
import { Product, Supplier } from '../../model/sale.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { WareHouse } from '../../model/warehouse.model';
import { InventoryItem } from '../../model/inventory.item.model';

@Component({
  selector: 'app-producmanagement',
  templateUrl: './producmanagement.component.html',
  styleUrl: './producmanagement.component.css'
})
export class ProducmanagementComponent implements OnInit {

  products: Product[] = [];
  newProduct: Product = new Product();
  supplier:Supplier[]=[];
  wareHouse:WareHouse[]=[];
  inventory:InventoryItem[]=[];

  constructor(private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: res => {
        this.products = res;
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }


  addProduct(): void {
    console.log(this.newProduct)
    this.productService.createProduct(this.newProduct).subscribe({
      next: res => {
        this.newProduct = new Product();
        this.loadProducts();
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }


  editProduct(productId: number ) {
    this.router.navigate(['updateproduct',productId]);
  
  }


  deleteProduct(productId: number): void {
    if (productId) {
      this.productService.deleteProduct(productId).subscribe(success => {
        if (success) {
          this.loadProducts();
        }
      });
    }
  }





}
