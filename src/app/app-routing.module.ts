import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrototypeComponent } from './prototype/prototype.component';

const routes: Routes = [
  {
    path: 'prototype',
    component: PrototypeComponent
  },
  {
    path: '',
    redirectTo: '/prototype', pathMatch: 'full'
  },
  {
    path: 'costumer',
    loadChildren: () => import('./modules/costumer/costumer.module').then(m => m.CostumerModule)
  },
  {
    path: 'waiter',
    loadChildren: () => import('./modules/waiter/waiter.module').then(m => m.WaiterModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
