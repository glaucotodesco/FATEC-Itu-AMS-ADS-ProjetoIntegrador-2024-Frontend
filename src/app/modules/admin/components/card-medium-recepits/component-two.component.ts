import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.css'
})
export class ComponentTwoComponent {
  
  @Input()
  num: number = 0; 


}
