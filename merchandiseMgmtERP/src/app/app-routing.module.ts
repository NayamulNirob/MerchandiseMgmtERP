import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { BuyerComponent } from './components/buyers/buyer/buyer.component';
import { OrderDetails } from './model/sale.model';
import { StyleComponent } from './components/buyers/style/style.component';
import { ExComponent } from './components/try/ex/ex.component';

const routes: Routes = [
  {path:'dashbord',component:DashbordComponent},
  {path:'buyer',component:BuyerComponent},
  {path:"order",component:OrderDetails},
  {path:"style",component:StyleComponent},
  {path:"ex",component:ExComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
