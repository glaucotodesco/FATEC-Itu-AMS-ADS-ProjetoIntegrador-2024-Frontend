import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'costumer',
    loadChildren: () => import('./modules/costumer/costumer.module').then(m => m.CostumerModule)
  },

  {  path: 'waiter',
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
