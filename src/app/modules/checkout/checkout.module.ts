import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';
import { OrdersSlipComponent } from './components/orders-slip/orders-slip.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { OrderRegisterComponent } from './components/order-register/order-register.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { AddCashComponent } from './components/add-cash/add-cash.component';
import { FormsModule } from '@angular/forms';
import { SelectOrderComponent } from './components/select-order/select-order.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CloseRegisterComponent } from './pages/close-register/close-register.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckCloseRegisterComponent } from './components/check-close-register/check-close-register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { RemoveTabsComponent } from './components/remove-tabs/remove-tabs.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OpenRegisterComponent,
    HomeComponent,
    OrdersSlipComponent,
    OrderRegisterComponent,
    CreateOrderComponent,
    AddCashComponent,
    SelectOrderComponent,
    CloseRegisterComponent,
    CheckCloseRegisterComponent,
    NavbarComponent,
    MainComponent,
    RemoveTabsComponent,
    CheckoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule,
    NgbModule,
    CheckoutRoutingModule,
    ReactiveFormsModule
  ]
})
export class CheckoutModule { }
