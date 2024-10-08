import { Component } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  // Arrays para produtos por categoria. -- Lembrando que são apenas valores falsos, para mostrar a função.
  pratosPrincipais = [
    { nome: 'Hambúrguer', preco: 25.00 },
    { nome: 'Pizza', preco: 30.00 }
  ];

  sobremesas = [
    { nome: 'Pudim', preco: 10.00 },
    { nome: 'Torta de Limão', preco: 12.00 }
  ];

  bebidas = [
    { nome: 'Refrigerante', preco: 5.00 },
    { nome: 'Suco Natural', preco: 7.00 }
  ];

  // Para controlar a categoria selecionada
  categoriaSelecionada: string = '';
  // Para armazenar a pesquisa
  pesquisa: string = '';

  // Método para filtrar os produtos
  filtrarProdutos(produtos: any[]) {
    return produtos.filter(produto => 
      produto.nome.toLowerCase().includes(this.pesquisa.toLowerCase())
    );
  }
}
