import { Component, OnInit } from '@angular/core';
import { Product, Supplier } from '../../model/sale.model';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { WareHouse } from '../../model/warehouse.model';
import { InventoryItem } from '../../model/inventory.item.model';

@Component({
  selector: 'app-producmanagement',
  templateUrl: './producmanagement.component.html',
  styleUrls: ['./producmanagement.component.css']
})
export class ProducmanagementComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  newProduct: Product = new Product();

  searchTerm: string = '';
  sortBy: string = 'name'; // Default sort

  supplier: Supplier[] = [];
  wareHouse: WareHouse[] = [];
  inventory: InventoryItem[] = [];

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: res => {
        this.products = res;
        this.filterAndSortProducts();
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }

  filterProducts(): void {
    this.filterAndSortProducts();
  }

  filterAndSortProducts(): void {
    // Filter the products based on the search term
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    // Sort the filtered products based on the selected sort criteria
    this.sortProducts();
  }

  sortProducts(): void {
    this.filteredProducts.sort((a, b) => {
      const aValue = a[this.sortBy as keyof Product];
      const bValue = b[this.sortBy as keyof Product];
  
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });
  }
  

  addProduct(): void {
    console.log(this.newProduct)
    this.productService.createProduct(this.newProduct).subscribe({
      next: res => {
        this.newProduct = new Product();
        this.loadProducts();
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

  private resetNewProducts() {
    this.newProduct = new Product();
  }
}
