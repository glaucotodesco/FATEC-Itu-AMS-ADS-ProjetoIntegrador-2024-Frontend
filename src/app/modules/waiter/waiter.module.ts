import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WaiterModule { }
