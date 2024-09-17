import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentOneComponent } from './components/card-top-stats/component-one.component';
import { ComponentTwoComponent } from './components/card-medium-recepits/component-two.component';
import { ComponentThreeComponent } from './components/card-percentage/component-three.component';
import { ComponentFourComponent } from './components/card-graph/component-four.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule, 
    NgbAccordionModule
  ]
})
export class AdminModule { }
