import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  exampleInfo = [
    {
      category: 'Bebidas',
      products: [
        {
          name: 'Coca-cola',
          price: 5,
          active: true,
        },
        {
          name: 'Água',
          price: 2,
          active: true,
        },
        {
          name: 'Itubaína',
          price: 4,
          active: false,
        },
      ],
    },
    {
      category: 'Pratos',
      products: [
        {
          name: 'Parmegiana',
          price: 22,
          active: true,
        },
        {
          name: 'Macarronada',
          price: 15,
          active: false,
        },
        {
          name: 'Salada',
          price: 9,
          active: true,
        },
      ],
    },
    {
      category: 'Sobremesas',
      products: [
        {
          name: "Bolo",
          price: 14,
          active: true
        },
      ],
    },
  ];
}
