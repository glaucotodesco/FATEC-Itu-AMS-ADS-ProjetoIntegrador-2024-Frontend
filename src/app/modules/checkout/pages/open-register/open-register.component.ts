import { Component } from '@angular/core';

@Component({
  selector: 'app-open-register',
  templateUrl: './open-register.component.html',
  styleUrl: './open-register.component.css'
})
export class OpenRegisterComponent {
salvar() {
    const valorInicial = (document.getElementById('valorInicial') as HTMLInputElement).value;
    alert('Valor salvo: R$ ' + valorInicial);

    const valorTotal = valorInicial ? 'R$ ' + parseFloat(valorInicial).toFixed(2) : 'R$ 0.00';
    document.getElementById('valorTotal')!.textContent = valorTotal;
  }
}
