import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-open-register',
  templateUrl: './open-register.component.html',
  styleUrls: ['./open-register.component.css']
})
export class OpenRegisterComponent implements OnInit {
  cashForm!: FormGroup;
  valorTotal: number = 0;
  podeIrParaPDV: boolean = false;
  caixasDisponiveis: number[] = [1, 2, 3];

  horaAtual: string = '';
  dataAtual: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cashForm = this.fb.group({
      numeroCaixa: [''],
      valorInicial: [0]
    });

    const agora = new Date();
    this.horaAtual = agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.dataAtual = agora.toLocaleDateString('pt-BR');
  }

  atualizarTotal() {
    const valor = this.cashForm.get('valorInicial')?.value || 0;
    this.valorTotal = parseFloat(valor);
  }

  salvarAbertura() {
    if (this.cashForm.valid) {
      console.log('Caixa aberto com:', this.cashForm.value);
      this.podeIrParaPDV = true;
    }
  }
}