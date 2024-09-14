// inventory-management.component.ts  
import { Component, OnInit } from '@angular/core';

import { InventoryItem, Product } from '../../model/sale.model';
import { InventoryService } from '../../services/inventory.service';
import { ProductService } from '../../services/product.service';
import { WarehouseService } from '../../services/warehouse.service';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventorymanagement.component.html',
  styleUrls: ['./inventorymanagement.component.css']
})
export class InventoryManagementComponent implements OnInit {
  inventory: InventoryItem[] = [];
  product: Product = new Product();

  filteredInventory: InventoryItem[] = [];
  searchTerm: string = '';
  sortBy: 'name' | 'stock' | 'price' = 'name';

  constructor(
    private inventoryService: InventoryService,
    private wareHouseService:WarehouseService,
    private productService:ProductService
   
  ) { }

  ngOnInit(): void {

    // this.loadInventory();

    this.inventoryService.loadInventory().subscribe(data => {
   
      this.inventory = data;
      this.filteredInventory = data; // Initialize filtered inventory  
    });
  }



  addItem() {
    const newItem = new InventoryItem();
    this.inventoryService.addInventoryItem(newItem);
    this.updateFilteredInventory();
  }

  updateStock(productId: number, quantity: number) {
    this.inventoryService.updateStock(productId, quantity);
    this.updateFilteredInventory();
  }

  manageLocation(productId: number, location: string) {
    this.inventoryService.manageLocation(productId, location);
    this.updateFilteredInventory();
  }

  filterInventory() {
    this.filteredInventory = this.inventoryService.filterInventory(this.searchTerm);
  }

  sortInventory() {
    this.filteredInventory = this.inventoryService.sortInventory(this.sortBy);
  }

  private updateFilteredInventory() {
    this.filteredInventory = this.inventoryService.getInventory();
  }
}