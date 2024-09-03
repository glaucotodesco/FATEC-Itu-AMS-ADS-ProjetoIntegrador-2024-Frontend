import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersSlipComponent } from './components/orders-slip/orders-slip.component';
import { CheckoutRoutingModule } from './checkout-routing.module';



@NgModule({
  declarations: [
    OpenRegisterComponent,
    HomeComponent,
    OrdersSlipComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
