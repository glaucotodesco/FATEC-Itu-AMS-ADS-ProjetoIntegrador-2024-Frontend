import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  inputing : boolean = false;

  pressInput(){
    this.inputing = !this.inputing;
  }
}
