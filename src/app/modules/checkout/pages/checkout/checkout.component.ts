import { Component } from '@angular/core';

interface Item {
  nome: string;
  preco: number;
  quantidade: number;
  valorOriginal?: number;
  removido?: boolean;
}

interface Comanda {
  id: number;
  itens: Item[];
  editando?: boolean;
  showDetails?: boolean; // Added property to manage visibility of details
}

interface SplitPayment {
  method: string;
  amount: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  comandas: Comanda[] = [];
  nextComandaId: number = 1;

  selectedPaymentMethod: string = '';
  valorPagoEmDinheiro: number | null = null;
  splitPayments: SplitPayment[] = [];

  // Propriedades para paginação
  paginaAtiva: number = 1;
  itensPorPagina: number = 3; // Número de comandas por página

  constructor() {
    this.comandas.push({
      id: this.nextComandaId++,
      itens: [
        { nome: 'Pizza', preco: 120.00, quantidade: 1 },
        { nome: 'Duplo Cheddar', preco: 80.00, quantidade: 1 }
      ],
      showDetails: false // Initialize showDetails
    });
    // Adicione mais comandas para testar a paginação
    this.comandas.push({
      id: this.nextComandaId++,
      itens: [
        { nome: 'Hambúrguer', preco: 50.00, quantidade: 2 },
        { nome: 'Refrigerante', preco: 5.00, quantidade: 3 }
      ],
      showDetails: false // Initialize showDetails
    });
    this.comandas.push({
      id: this.nextComandaId++,
      itens: [
        { nome: 'Salada', preco: 30.00, quantidade: 1 },
        { nome: 'Suco Natural', preco: 7.00, quantidade: 2 }
      ],
      showDetails: false // Initialize showDetails
    });
    // Add more comandas as needed for testing
    this.comandas.push({
      id: this.nextComandaId++,
      itens: [
        { nome: 'Frango Grelhado', preco: 45.00, quantidade: 1 },
        { nome: 'Cerveja', preco: 10.00, quantidade: 2 }
      ],
      showDetails: false // Initialize showDetails
    });
    this.comandas.push({
      id: this.nextComandaId++,
      itens: [
        { nome: 'Batata Frita', preco: 15.00, quantidade: 1 },
        { nome: 'Água', preco: 3.00, quantidade: 1 }
      ],
      showDetails: false // Initialize showDetails
    });
  }

  get totalAmount(): number {
    return this.getTotalComGorjeta();
  }

  get totalComandas(): number {
    return this.comandas.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalComandas / this.itensPorPagina); // Calculate total pages
  }

  get comandasPaginas(): Comanda[] {
    const inicio = (this.paginaAtiva - 1) * this.itensPorPagina;
    return this.comandas.slice(inicio, inicio + this.itensPorPagina);
  }

  mudarPagina(pagina: number) {
    this.paginaAtiva = pagina;
  }

  addComanda() {
    this.comandas.push({ id: this.nextComandaId++, itens: [], showDetails: false }); // Initialize showDetails
  }

  removeComanda(index: number) {
    this.comandas.splice(index, 1);
  }

  markAsRemoved(item: Item) {
    item.removido = true;
  }

  toggleEditQuantity(comanda: Comanda) {
    comanda.editando = true;
  }

  cancelEditQuantity(comanda: Comanda) {
    comanda.editando = false;
  }

  saveNewQuantity(comanda: Comanda) {
    comanda.itens.forEach(item => {
      if (!item.valorOriginal) {
        item.valorOriginal = item.preco * item.quantidade;
      }
    });
    comanda.editando = false;
  }

  calculateComandaTotal(comanda: Comanda): number {
    return comanda.itens.filter(item => !item.removido)
      .reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  getTotalGeral(): number {
    return this.comandas.reduce((soma, comanda) => soma + this.calculateComandaTotal(comanda), 0);
  }

  getTotalComGorjeta(): number {
    return this.getTotalGeral() * 1.10;
  }

  calculateTip(total: number): number {
    return total * 0.15;
  }

  calcularTroco(): number {
    const total = this.getTotalComGorjeta();
    return (this.valorPagoEmDinheiro ?? 0) - total;
  }

  onPaymentMethodChange() {
    if (this.selectedPaymentMethod !== 'split') {
      this.splitPayments = [];
    }
    if (this.selectedPaymentMethod !== 'dinheiro') {
      this.valorPagoEmDinheiro = null;
    }
  }

  addSplitPayment() {
    this.splitPayments.push({ method: 'credit', amount: 0 });
  }

  removeSplit(index: number) {
    this.splitPayments.splice(index, 1);
  }

  getTotalSplitAmount(): number {
    return this.splitPayments.reduce((soma, p) => soma + (p.amount || 0), 0);
  }

  getSplitChange(): number {
    const total = this.getTotalComGorjeta();
    const pago = this.getTotalSplitAmount();
    const pagamentoDinheiro = this.splitPayments.find(p => p.method === 'dinheiro');
    return pagamentoDinheiro && pago > total ? pago - total : 0;
  }

  concluirPagamento() {
    const total = this.getTotalComGorjeta();

    if (this.selectedPaymentMethod === 'dinheiro') {
      if (this.valorPagoEmDinheiro === null || this.valorPagoEmDinheiro < total) {
        alert(`Valor insuficiente! Pago: R$ ${this.valorPagoEmDinheiro?.toFixed(2) ?? '0'}, Total: R$ ${total.toFixed(2)}`);
        return;
      }

      const troco = this.calcularTroco();
      alert(`Pagamento em DINHEIRO confirmado!\nTotal: R$ ${total.toFixed(2)}\nPago: R$ ${this.valorPagoEmDinheiro.toFixed(2)}\nTroco: R$ ${troco.toFixed(2)}`);
    }

    else if (this.selectedPaymentMethod === 'split') {
      const totalPago = this.getTotalSplitAmount();
      if (totalPago < total) {
        alert(`Total dos pagamentos (R$ ${totalPago.toFixed(2)}) é menor que o necessário (R$ ${total.toFixed(2)}).`);
        return;
      }

      const troco = this.getSplitChange();
      let mensagem = 'Pagamento DIVIDIDO:\n';
      this.splitPayments.forEach(p => {
        mensagem += `• ${p.method.toUpperCase()}: R$ ${p.amount.toFixed(2)}\n`;
      });
      mensagem += `Total pago: R$ ${totalPago.toFixed(2)}\n`;

      if (troco > 0) {
        mensagem += `Troco: R$ ${troco.toFixed(2)}\n`;
      }

      alert(mensagem);
    }

    else {
      alert(`Pagamento de R$ ${total.toFixed(2)} realizado via ${this.selectedPaymentMethod.toUpperCase()}`);
    }

    // Reset
    this.comandas = [];
    this.selectedPaymentMethod = '';
    this.valorPagoEmDinheiro = null;
    this.splitPayments = [];
  }

  imprimirRecibo() {
    alert("Recibo impresso (simulação).");
  }
}