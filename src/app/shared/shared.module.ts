import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuItemComponent } from './components/menu-item/menu-item.component';



@NgModule({
  declarations: [
    ModalComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    ModalComponent,
    MenuItemComponent,
  ]
})
export class SharedModule { }
