import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MainComponent } from './pages/main/main.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CostumerModule { }
