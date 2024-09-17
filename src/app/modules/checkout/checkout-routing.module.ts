import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
 
const routes: Routes = [
  {path: 'home-checkout', component: HomeComponent},
  {path: 'checkout', component: CheckoutComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { 

} 