import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './modules/admin/admin.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
