import { Component, Input, Output } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrl: './component-four.component.css',
  

})
export class ComponentFourComponent {
  
  timestamp: string = '' 

 


  setTimestamp(value: string){
    this.timestamp = value; 

  }
}
