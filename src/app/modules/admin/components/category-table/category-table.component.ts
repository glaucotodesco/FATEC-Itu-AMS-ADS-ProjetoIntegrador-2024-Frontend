import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.css'
})
export class CategoryTableComponent {

  @Input()
  category : any = {};
}
