import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/sale.model';
import { ProductCategory } from '../../model/productcategorymodel';
import { ProductcategoryService } from '../../services/productcategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})
export class ProductcategoryComponent implements OnInit {

  categories: ProductCategory[] = [];
  newCategory: ProductCategory = new ProductCategory();

  selectedFile: File | null = null;


  constructor(private categoriesService: ProductcategoryService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoriesService.getProductCatagories().subscribe({
      next: res => {
        this.categories = res;
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }



  addProductCategories() {
    if (this.selectedFile) {
      this.categoriesService.createProductCategory(this.newCategory,this.selectedFile).subscribe({
        next: res => {
          console.log(this.newCategory);
          this.newCategory = new ProductCategory();
          this.loadCategories();
        },
        error: error => {
          console.log(error);
          alert(error);
        }
      });
    }
    else{
      alert('Please Select an image');
    }

  }


  editProductCategory(categoryId: number) {
    this.router.navigate(['', categoryId]);

  }


  deleteProductCategory(categoryId: number): void {
    if (categoryId) {
      this.categoriesService.deleteProductCategory(categoryId).subscribe(success => {
        if (success) {
          this.loadCategories();
        }
      });
    }
  }



}
