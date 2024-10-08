import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'main', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostumerRoutingModule { }
