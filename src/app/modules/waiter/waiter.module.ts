import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaiterRoutingModule } from './waiter-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderAddonsComponent } from './components/order-addons/order-addons.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TotalComponent } from './components/total/total.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    OrderDetailsComponent,
    OrderAddonsComponent,
    TotalComponent,
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    WaiterRoutingModule
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    OrderDetailsComponent,
    OrderAddonsComponent,
    TotalComponent,
    NavbarComponent,
  ]
})
export class WaiterModule { }
