import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { WarehouseService } from '../../services/warehouse.service';
import { WareHouse } from '../../model/warehouse.model';

@Component({
  selector: 'app-warehouseview',
  templateUrl: './warehouseview.component.html',
  styleUrl: './warehouseview.component.css'
})
export class WarehouseviewComponent {


  wareHouses: WareHouse[] = [];
  newWareHouse: WareHouse = new WareHouse();

  constructor(private wareHousetService:WarehouseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadWareHouses();
  }

  loadWareHouses(): void {
    this.wareHousetService.getWarehouses().subscribe({
      next: res => {
        this.wareHouses = res;
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }


  addWareHouse(): void {
    this.wareHousetService.createWarehouses(this.newWareHouse).subscribe({
      next: res => {
        this.newWareHouse = new WareHouse();
        this.loadWareHouses();
      },
      error: error => {
        console.log(error);
        alert(error);
      }
    });
  }


  editWareHouse(WareHouseId: number ) {
    this.router.navigate(['updateproduct',WareHouseId]);
  
  }


  deleteWareHouse(WareHouseId: number): void {
    if (WareHouseId) {
      this.wareHousetService.deleteWarehouses(WareHouseId).subscribe(success => {
        if (success) {
          this.wareHouses = this.wareHouses.filter(p => p.id !== WareHouseId); 
          this.router.navigate(['/warehouseview']);
        }
        else{
          this.router.navigate(['/warehouseview']);
        }
      });
    }
  }

}
