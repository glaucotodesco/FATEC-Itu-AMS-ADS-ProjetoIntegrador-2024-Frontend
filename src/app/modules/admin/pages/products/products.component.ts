import { Component } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  openModal(modalForm: ModalComponent, params : any = {}){
    modalForm.open(params);
  }

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
