import { Component } from '@angular/core';

@Component({
  selector: 'app-order-addons',
  templateUrl: './order-addons.component.html',
  styleUrl: './order-addons.component.css'
})
export class OrderAddonsComponent {
  prods = [
    { id: 1, name: "Pimenta Biquinho", price: 5.98 },
    { id: 2, name: "Parmesão Ralado", price: 6.59 },
    { id: 3, name: "Carne Extra", price: 10.99 },
    { id: 4, name: "Molho Extra", price: 3.25 },
  ]
}
