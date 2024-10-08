import { Component } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  searchTerm: string = ''; 
  orders: any[] = []; 
  allOrders: any[] = [ 
    { comanda: 1, cliente: 'João', data: new Date(), status: 'Finalizado', total: 50.00 },
    { comanda: 2, cliente: 'Maria', data: new Date(), status: 'Em preparo', total: 30.00 },
    { comanda: 3, cliente: 'Pedro', data: new Date(), status: 'Finalizado', total: 40.00 },
    { comanda: 4, cliente: 'Ana', data: new Date(), status: 'Em preparo', total: 25.00 }
  ];
  noResults: boolean = false;

  searchOrders() {
    
    this.orders = this.allOrders.filter(order =>
      order.comanda.toString().includes(this.searchTerm) || 
      order.cliente.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    
    this.noResults = this.orders.length === 0;
  }

  viewDetails(order: any) {
   
    console.log(order);
  }
}