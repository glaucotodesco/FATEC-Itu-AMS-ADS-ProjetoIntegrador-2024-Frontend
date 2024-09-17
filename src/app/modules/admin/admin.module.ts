import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CardTopStatsComponent } from './components/card-top-stats/card-top-stats.component';
import { CardMediumStatsComponent } from './components/card-medium-stats/card-medium-stats.component';
import { CardProdDropdownComponent } from './components/card-prod-dropdown/card-prod-dropdown.component';
import { CardGraphComponent } from './components/card-graph/card-graph.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardTopStatsComponent,
    CardMediumStatsComponent,
    CardProdDropdownComponent,
    CardGraphComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule, 
    NgbAccordionModule
  ]
})
export class AdminModule { }
