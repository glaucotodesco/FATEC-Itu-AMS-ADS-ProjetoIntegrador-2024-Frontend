import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-medium-stats',
  templateUrl: './card-medium-stats.component.html',
  styleUrl: './card-medium-stats.component.css'
})
export class CardMediumStatsComponent {
  @Input()
  num: number = 0; 

}
