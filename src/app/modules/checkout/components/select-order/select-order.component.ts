import { Component } from '@angular/core';

@Component({
  selector: 'app-select-order',
  templateUrl: './select-order.component.html',
  styleUrl: './select-order.component.css'
})
export class SelectOrderComponent {
  selectedCategory: string = '';
  selectedItems: string[] = [];

  onCategoriaChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
  }

  addItem(item: string) {
    if (!this.selectedItems.includes(item)) {
      this.selectedItems.push(item);
    }
  }

}
