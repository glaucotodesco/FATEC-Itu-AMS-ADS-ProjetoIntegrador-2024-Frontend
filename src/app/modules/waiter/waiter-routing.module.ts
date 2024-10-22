import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderTicketsComponent } from './pages/order-tickets/order-tickets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order-ticket', component: OrderTicketsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
