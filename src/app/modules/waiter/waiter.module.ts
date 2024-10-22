import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { WaiterRoutingModule } from './waiter-routing.module';
import { OrderTicketsComponent } from './pages/order-tickets/order-tickets.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    OrderTicketsComponent,
  ],
  imports: [
    CommonModule,
    WaiterRoutingModule
  ],
  exports: [
    HomeComponent,
    MenuComponent
  ]
})
export class WaiterModule { }
