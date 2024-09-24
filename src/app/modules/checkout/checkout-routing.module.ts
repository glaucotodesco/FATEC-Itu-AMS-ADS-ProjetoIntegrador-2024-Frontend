import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenRegisterComponent } from './pages/open-register/open-register.component';

const routes: Routes = [
  {path: 'open-register', component: OpenRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
