import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CategoryTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductsComponent
  ]
})
export class AdminModule { }
