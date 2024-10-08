import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersSlipComponent } from './components/orders-slip/orders-slip.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OrderRegisterComponent } from './components/order-register/order-register.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { AddCashComponent } from './components/add-cash/add-cash.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OpenRegisterComponent,
    HomeComponent,
    OrdersSlipComponent,
    OrderRegisterComponent,
    CreateOrderComponent,
    AddCashComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CheckoutModule { }
