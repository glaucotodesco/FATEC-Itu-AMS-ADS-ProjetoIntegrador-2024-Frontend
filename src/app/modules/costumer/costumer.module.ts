import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MainComponent } from './pages/main/main.component';
import { CostumerRoutingModule } from './costumer-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    CostumerRoutingModule
  ],
  exports:[
    HomeComponent,
    MenuComponent,
    MainComponent
  ]
})
export class CostumerModule { }
