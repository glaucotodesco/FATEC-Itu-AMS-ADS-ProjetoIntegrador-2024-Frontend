import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CostumerRoutingModule } from './costumer-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    AboutUsComponent
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
