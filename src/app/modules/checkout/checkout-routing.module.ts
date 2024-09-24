import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloseRegisterComponent } from './pages/close-register/close-register.component';

const routes: Routes = [
  {path: 'close-register', component: CloseRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
