import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    ModalComponent
  ]
})
export class SharedModule { }
