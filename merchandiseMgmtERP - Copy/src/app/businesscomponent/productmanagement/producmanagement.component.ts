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


  supplier: Supplier[] = [];
  wareHouse: WareHouse[] = [];
  inventory: InventoryItem[] = [];

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
        this.filteredProducts = res;
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
        this.updateFilteredProducts();
        this.resetNewProducts();

      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }


  editProduct(productId: number) {
    this.router.navigate(['updateproduct', productId]);

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




  calculateTotalAmount(): number {
    const total = this.newProduct.price * this.newProduct.quantity;
    const taxAmount = (total * this.newProduct.tax) / 100;
    return total + taxAmount;
  }

  filteredProducts: Product[] = [];
  searchTerm: string = '';
  sortBy: 'name' | 'productCode' | 'description' = 'name';



  filterProducts() {
    this.filteredProducts = this.productService.filterProducts(this.searchTerm);
  }

  sortProducts() {
    this.filteredProducts = this.productService.sortProducts(this.sortBy);
  }

  private updateFilteredProducts() {
    this.filteredProducts = this.productService.getByProducts();
  }

  private resetNewProducts() {
    this.newProduct = new Product();
  }


  sortOptions: any[] = ['name', 'productCode', 'description'];




  toggleSortBy() {
  
    const currentIndex = this.sortOptions.indexOf(this.sortBy);
    
    const nextIndex = (currentIndex + 1) % this.sortOptions.length;
    
    this.sortBy = this.sortOptions[nextIndex];

  
    this.sortProducts();
  }

}
