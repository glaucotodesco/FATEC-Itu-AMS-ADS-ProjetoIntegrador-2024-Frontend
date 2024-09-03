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

  
}
