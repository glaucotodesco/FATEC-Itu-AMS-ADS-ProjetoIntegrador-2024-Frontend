import { Component } from '@angular/core';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrl: './component-three.component.css'
})
export class ComponentThreeComponent {
  items = [
    {
      id: 1, class: 'Bebidas', percentange: 60,
      products: [
        { id: 1, name: 'Coca-cola', price: 10, percentage: 50 },
        { id: 2, name: 'Pepsi', price: 10, percentage: 10  },
        { id: 3, name: 'Sprite', price: 10, percentage: 10 },
        { id: 4, name: 'Fanta', price: 10, percentage: 13 },
        { id: 5, name: 'Guaraná', price: 10, percentage: 17 },
      ]
    },
    {
      id: 2, class: 'Pratos', percentange: 30,
      products: [
        { id: 1, name: 'Macarronada', price: 10, percentage: 20 },
        { id: 2, name: 'Pizza', price: 10, percentage: 10 },
        { id: 3, name: 'Hamburger', price: 10, percentage: 10 },
        { id: 4, name: 'Arroz com feijão', price: 30, percentage: 30 },
        { id: 5, name: 'Esfiha', price: 10, percentage: 20 },

        { id: 6, name: 'Lasanha', price: 10, percentage: 10 }




      ]
    },
    {
      id: 3, class: 'Sobremesas', percentange: 10, products: [
        { id: 1, name: 'Brownie', price: 10, percentage: 9 },
        { id: 2, name: 'Bolo de cereja', price: 10 , percentage: 11 },
        { id: 3, name: 'Torta de chocolate', price: 10, percentage: 12 },
        { id: 4, name: 'Cookies', price: 10, percentage: 13 },
        { id: 5, name: 'Pavlova', price: 10, percentage: 20  },
        { id: 6, name: 'Mousse de chocolate', price: 10, percentage: 35 },

      ]
    }

  ]

}
