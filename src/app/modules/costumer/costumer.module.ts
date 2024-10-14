import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CostumerRoutingModule } from './costumer-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SideMenuComponent } from './pages/main/components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    MainComponent,
    SideMenuComponent
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
