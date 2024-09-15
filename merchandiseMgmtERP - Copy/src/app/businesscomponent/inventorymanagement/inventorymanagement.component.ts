// inventory-management.component.ts  
import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/sale.model';
import { InventoryService } from '../../services/inventory.service';
import { ProductService } from '../../services/product.service';
import { WarehouseService } from '../../services/warehouse.service';
import { InventoryItem } from '../../model/inventory.item.model';
import { WareHouse } from '../../model/warehouse.model';
import { error } from 'console';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventorymanagement.component.html',
  styleUrls: ['./inventorymanagement.component.css']
})
export class InventoryManagementComponent implements OnInit {
  inventories: InventoryItem[] = [];
  warehouses: WareHouse[] = [];
  products: Product[] = [];
  inventory: InventoryItem = new InventoryItem();

  filteredInventory: InventoryItem[] = [];
  searchTerm: string = '';
  sortBy: 'name' | 'stock' | 'price' = 'name';

  constructor(
    private inventoryService: InventoryService,
    private wareHouseService: WarehouseService,
    private productService: ProductService

  ) { }

  ngOnInit(): void {

    this.loadInventories();

    this.wareHouseService.getWarehouses().subscribe(data => {
      this.warehouses = data;
    });

    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });

  }

  loadInventories() {
    this.inventoryService.loadInventories().subscribe(data => {
      this.inventories = data;
      this.filteredInventory = data; // Initialize filtered inventory  
    });
  }

  addInventory() {
    this.inventoryService.addInventoryItem(this.inventory).subscribe({
      next: res => {
        this.loadInventories();
      },
      error: error => {
        console.log(error);
      }
    });
  }

  // updateStock(productId: number, quantity: number) {
  //   this.inventoryService.updateStock(productId, quantity);
  //   this.updateFilteredInventory();
  // }

  // manageLocation(productId: number, location: string) {
  //   this.inventoryService.manageLocation(productId, location);
  //   this.updateFilteredInventory();
  // }

  filterInventory() {
    this.filteredInventory = this.inventories.filter(item =>
      item.product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // private updateFilteredInventory() {
  //   this.filteredInventory = this.inventoryService.getInventory();
  // }
}