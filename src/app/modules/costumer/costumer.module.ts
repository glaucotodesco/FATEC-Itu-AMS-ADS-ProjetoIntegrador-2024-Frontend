import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CostumerRoutingModule } from './costumer-routing.module';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CostumerRoutingModule
  ],
  exports: [
    HomeComponent,
    MenuComponent
  ]
})
export class CostumerModule { }
