import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProducmanagementComponent } from './businesscomponent/producmanagement/producmanagement.component';
import { InventoryManagementComponent } from './businesscomponent/inventorymanagement/inventorymanagement.component';
import { OrdermanagementComponent } from './businesscomponent/ordermanagement/ordermanagement.component';
import { SupplierManagementComponent } from './businesscomponent/suppliermanagement/suppliermanagement.component';
import { SalesManagementComponent } from './businesscomponent/salesmanagement/salesmanagement.component';
import { CustomerManagementComponent } from './businesscomponent/customermanagement/customermanagement.component';
import { ReportsAnalyticsComponent } from './businesscomponent/reports-and-analytics/reports-and-analytics.component';


const routes: Routes = [
  {path:'dashbord',component:DashbordComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'product',component:ProducmanagementComponent},
  {path:'inventory',component:InventoryManagementComponent},
  {path:'orders',component:OrdermanagementComponent},
  {path:'supplier',component:SupplierManagementComponent},
  {path:'sales',component:SalesManagementComponent},
  {path:'customer',component:CustomerManagementComponent},
  {path:'reports',component:ReportsAnalyticsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
