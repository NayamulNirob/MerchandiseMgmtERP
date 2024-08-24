import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { BuyerComponent } from './components/buyers/buyer/buyer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { OrderDetailsComponent } from './components/buyers/order-details/order-details.component';
import { StyleComponent } from './components/buyers/style/style.component';
import { ExComponent } from './components/try/ex/ex.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashbordComponent,
    BuyerComponent,
    OrderDetailsComponent,
    StyleComponent,
    ExComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
