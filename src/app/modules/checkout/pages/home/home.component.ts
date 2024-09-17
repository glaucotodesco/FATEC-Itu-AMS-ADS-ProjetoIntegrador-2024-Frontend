import { Component } from '@angular/core';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  openModal(modal : ModalComponent){
    modal.open();
  }

  pedido = {
    tipoPedido: '',
    nomeCliente: '',
    itens: []
  };

 

}
