import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-top-stats',
  templateUrl: './card-top-stats.component.html',
  styleUrl: './card-top-stats.component.css'
})
export class CardTopStatsComponent {
  @Input()
  num: number = 0; 

}
