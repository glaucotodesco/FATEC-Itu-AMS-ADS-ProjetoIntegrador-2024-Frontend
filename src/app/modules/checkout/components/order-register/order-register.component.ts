import { Component } from '@angular/core';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrl: './order-register.component.css'
})
export class OrderRegisterComponent {
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
