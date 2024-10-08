import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';
import { OrdersSlipComponent } from './components/orders-slip/orders-slip.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutRoutingModule } from './checkout-routing.module';



@NgModule({
  declarations: [
    OpenRegisterComponent,
    OrdersSlipComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
