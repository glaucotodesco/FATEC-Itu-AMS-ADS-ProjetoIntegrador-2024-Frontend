import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[]
})
export class AdminModule { }
