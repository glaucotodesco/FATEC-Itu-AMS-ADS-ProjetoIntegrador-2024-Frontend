import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pedidos = [
    { id: 1, tipoPedido: 'Balcão', nomeCliente: 'João', itens: ['Item 1', 'Item 2'] },
    { id: 2, tipoPedido: 'Mesa', nomeCliente: 'Felipe', itens: ['Item 3', 'Item 4'] }
  ];

  pedido = {
    tipoPedido: '',
    nomeCliente: '',
    itens: []
  };

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
