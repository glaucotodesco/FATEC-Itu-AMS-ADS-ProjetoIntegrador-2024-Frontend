import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  items = [
    { label: 'Entradas', imageUrl: 'assets/costumer/search/entradas.jpg' },
    { label: 'Prato Principal', imageUrl: 'assets/costumer/search/prato_principal.jpg' },
    { label: 'Bebidas', imageUrl: 'assets/costumer/search/bebidas.jpg' },
    { label: 'Porções', imageUrl: 'assets/costumer/search/porcoes.jpg' },
    { label: 'Sobremesas', imageUrl: 'assets/costumer/search/sobremesa.jpg' }
  ];

  selectedCard: any = null;

  selectCard(card: any) {
    this.selectedCard = this.selectedCard === card ? null : card; // Alterna a seleção
  }
}
