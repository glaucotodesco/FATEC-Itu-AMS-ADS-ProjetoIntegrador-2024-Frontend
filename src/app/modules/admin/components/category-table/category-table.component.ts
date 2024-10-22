import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.css'
})
export class CategoryTableComponent {
  @Output()
  editEmitter = new EventEmitter();
  
  @Output()
  removeEmitter = new EventEmitter();

  edit(){
    this.editEmitter.emit();
  }

  remove(){
    this.removeEmitter.emit();
  }
  
  @Input()
  category : any = {};
}
