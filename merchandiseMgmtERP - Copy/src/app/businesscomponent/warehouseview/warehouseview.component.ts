import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { WarehouseService } from '../../services/warehouse.service';
import { WareHouse } from '../../model/warehouse.model';
import { UserModel } from '../../model/UserModel.1';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-warehouseview',
  templateUrl: './warehouseview.component.html',
  styleUrl: './warehouseview.component.css'
})
export class WarehouseviewComponent {


  wareHouses: WareHouse[] = [];
  newWareHouse: WareHouse = new WareHouse();

  userRole: string | null = '';
  currentUser: UserModel | null = null;

  constructor(private wareHousetService:WarehouseService,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.loadWareHouses();
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.userRole = user?.role || null;
    });
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
    this.router.navigate(['updatewarehouse',WareHouseId]);
  
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
