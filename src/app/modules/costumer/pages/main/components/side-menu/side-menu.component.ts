import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  activeItem: number = 0; 

  setActiveItem(index: number) {
    this.activeItem = index;
  }
}
