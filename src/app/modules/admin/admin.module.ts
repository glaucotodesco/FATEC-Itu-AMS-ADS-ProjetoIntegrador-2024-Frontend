import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    CategoryTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[]
})
export class AdminModule { }
