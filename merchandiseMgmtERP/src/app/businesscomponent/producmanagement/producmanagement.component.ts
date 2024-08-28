import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/sale.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-producmanagement',
  templateUrl: './producmanagement.component.html',
  styleUrl: './producmanagement.component.css'
})
export class ProducmanagementComponent implements OnInit {

  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', description: '', price: 0, quantity: 0 };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.loadProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe((product: Product) => {
      this.products.push(product); // Update local product list  
      this.newProduct = { id: 0, name: '', description: '', price: 0, quantity: 0 }; // Reset form  
    });
  }

  editProduct(productId: number): void {
    const updatedProduct = this.products.find(p => p.id === productId);
    if (updatedProduct) {
      // Call editProduct from ProductService  
      this.productService.editProduct(productId, updatedProduct).subscribe(success => {
        if (success) {
          const index = this.products.findIndex(p => p.id === productId);
          if (index !== -1) this.products[index] = { ...this.products[index], ...updatedProduct }; // Update local product  
        }
      });
    }
  }




  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(success => {
      if (success) {
        this.products = this.products.filter(p => p.id !== productId); // Update local product list  
      }
    });
  }



  

}
