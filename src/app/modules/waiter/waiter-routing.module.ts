import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuItemComponent } from '../../shared/components/menu-item/menu-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
