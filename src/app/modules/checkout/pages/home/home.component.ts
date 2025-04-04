// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  tickets = [
    {
      id: 1,
      client: 'João',
      totalValue: 150,
      dateCreate: new Date(),
      status: 'pendente',
      ticketItems: [
        { description: 'Hamburguer', price: 50, quantity: 2 },
        { description: 'Refrigerante', price: 25, quantity: 2 }
      ]
    },
    // ... outras comandas
  ];

  selectedTicket: any = null;

  viewOrderDetails(ticket: any) {
    this.selectedTicket = { ...ticket }; // faz cópia para edição isolada
  }

  closeModal() {
    this.selectedTicket = null;
  }

  toggleStatus() {
    if (!this.selectedTicket) return;

    // Alternar entre "pendente" e "concluída"
    this.selectedTicket.status =
      this.selectedTicket.status === 'pendente' ? 'concluída' : 'pendente';

    // Atualiza na lista original
    const index = this.tickets.findIndex(t => t.id === this.selectedTicket.id);
    if (index !== -1) {
      this.tickets[index].status = this.selectedTicket.status;
    }

    this.closeModal();
  }
}