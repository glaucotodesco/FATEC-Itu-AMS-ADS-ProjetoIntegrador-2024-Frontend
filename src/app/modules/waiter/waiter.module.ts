import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { WaiterRoutingModule } from './waiter-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    WaiterRoutingModule
  ],
  exports: [
    HomeComponent,
    MenuComponent
  ]
})
export class WaiterModule { }
