import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersSlipComponent } from './components/orders-slip/orders-slip.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OrderRegisterComponent } from './components/order-register/order-register.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';



@NgModule({
  declarations: [
    OpenRegisterComponent,
    HomeComponent,
    OrdersSlipComponent,
    OrderRegisterComponent,
    TabsComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { }
