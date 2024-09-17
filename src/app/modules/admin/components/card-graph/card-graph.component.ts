import { Component } from '@angular/core';

@Component({
  selector: 'app-card-graph',
  templateUrl: './card-graph.component.html',
  styleUrl: './card-graph.component.css'
})
export class CardGraphComponent {

  timestamp: String = '';


  setTimestamp(value: String){
    this.timestamp = value;

  }

}
