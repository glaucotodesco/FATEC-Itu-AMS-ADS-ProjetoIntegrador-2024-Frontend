import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[]
})
export class AdminModule { }
