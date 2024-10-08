import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.css'
})
export class MenuItemComponent {
  prods = [
    {name: 'bife com batata', price: 29.99, image: 'https://imgs.search.brave.com/ILeWK84t7nc5cuhXIqWvuroyOgF365UG338rcFIMF2Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2VuYXJpb210LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wMi9SZWNl/aXRhLWRlLWJpZmUt/Y29tLWJhdGF0YS1m/cml0YS5qcGc'},
    {name: 'frango à milanesa', price: 39.99, image: 'https://imgs.search.brave.com/C75f-wax7JibX22jE6RD1THm30QX0d7R1KrPInGoxiY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVlcGZyZWV6ZS5j/b20uYnIvaW1nL3By/YXRvcy9iaWcvaWF2/MDJfZmlsZV9kZV9m/cmFuZ29fYV9taWxh/bmVzYTIxMDgyNTA1/NTkwOC5qcGc'},
    {name: 'macarrão ao sugo', price: 24.99, image: 'https://imgs.search.brave.com/OdqWL2E-crnV3RlQ8LWpKyRMnC7ucmJoD40BG-JDWcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5hbWFyaWFicm9n/dWkuY29tLmJyL2Fz/c2V0cy91cGxvYWRz/L3JlY2VpdGFzL2Zv/dG9zL3VzdWFyaW8t/MjEyNC1mZWRlMDYz/ZDJlNzVmMjljM2Yz/OWY0MmJjNzY0MjRk/MC5qcGc'},
    {name: 'brusqueta de carne', price: 9.99, image: 'https://imgs.search.brave.com/eefgdcxCsMnuctAxODrACcPfnbQpm56DoMME78bF0Uo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2VudHJh/bGJsb2dzLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMi9icnVzY2hl/dHRhLWl0YWxpYW5h/LmpwZz9yZXNpemU9/ODAwLDUzMCZzc2w9/MQ'},
  ]
}
