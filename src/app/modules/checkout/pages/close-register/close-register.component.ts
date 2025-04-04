import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-close-register',
  templateUrl: './close-register.component.html',
  styleUrl: './close-register.component.css'
})
  export class CloseRegisterComponent implements OnInit {

    caixaId = 1;
  dataAbertura: string = '';
  horaAbertura: string = '';

  pagoDinheiro = 151;
  pagoCredito = 300;
  pagoDebito = 200;
  pagoPix = 100;

  totalVendas = 750;
  diferenca = 1;
  saldoFinal = 750;

  confirmacao: boolean = false;
  fechado: boolean = false;
  logGerado: boolean = false;
  relatorioGerado: boolean = false;

  ngOnInit(): void {
    const agora = new Date();
    this.dataAbertura = agora.toISOString().split('T')[0];
    this.horaAbertura = agora.toLocaleTimeString('pt-BR');
  }

  confirmarFechamento() {
    this.confirmacao = true;
  }

  cancelarFechamento() {
    this.confirmacao = false;
  }

  fecharCaixa() {
    this.fechado = true;
    this.confirmacao = false;

    // Simular geração de log e relatório
    this.gerarLogDoDia();
    this.gerarRelatorioDoDia();

    alert('Caixa fechado com sucesso!');
  }

  gerarLogDoDia() {
    this.logGerado = true;
    console.log('📘 Log do dia gerado.');
  }

  gerarRelatorioDoDia() {
    this.relatorioGerado = true;
    console.log('📊 Relatório do dia gerado.');
  }

}