import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  items = [
    { label: 'Entradas', imageUrl: 'assets/costumer/search/entradas.jpg' },
    { label: 'Prato Principal', imageUrl: 'assets/costumer/search/prato_principal.jpg' },
    { label: 'Bebidas', imageUrl: 'assets/costumer/search/bebidas.jpg' },
    { label: 'Porções', imageUrl: 'assets/costumer/search/porcoes.jpg' },
    { label: 'Sobremesa', imageUrl: 'assets/costumer/search/sobremesa.jpg' }
  ];  
  categories = [
    {
      name: 'Entradas',
      products: [
        { name: 'Brusqueta de Carne', price: 9.99, image: 'https://imgs.search.brave.com/eefgdcxCsMnuctAxODrACcPfnbQpm56DoMME78bF0Uo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2VudHJh/bGJsb2dzLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMi9icnVzY2hl/dHRhLWl0YWxpYW5h/LmpwZz9yZXNpemU9/ODAwLDUzMCZzc2w9/MQ' },
        { name: 'Salada Caesar', price: 12.99, image: 'https://imgs.search.brave.com/6F11_jtBG7UXmmp4DOPpUAWIo2Ud48qV9M8ZZpzCk3E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29jaW5oYW5hcy5j/b20vcHJvZHV0b3Jz/L3NhbGFkYV9jZWNh/c3RzL2NhYWNpdGVy/ZWJmYmlsYXRhb25h/dmlkYXBlY28uanBn' },
        { name: 'Coxinha', price: 6.99, image: 'https://imgs.search.brave.com/O9HwYEnFYkAoGl8qOwKo7b6-pGhYk9DawND8ZqIgI7Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cudmVnZXRpbmEubmV0L2ltYWdlcy9yZWxhdGl2ZS1saXN0aW5nL2NveGluYWhhaWxlX2ZpbGVzL3h4eHh4eHh4eHh4L3BhZ2UvY292ZXJfb3ZlcmxpbmUuanBn' }
      ]
    },
    {
      name: 'Prato Principal',
      products: [
        { name: 'Bife com Batata', price: 29.99, image: 'https://imgs.search.brave.com/ILeWK84t7nc5cuhXIqWvuroyOgF365UG338rcFIMF2Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2VuYXJpb210LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNC8wMi9SZWNl/aXRhLWRlLWJpZmUt/Y29tLWJhdGF0YS1m/cml0YS5qcGc' },
        { name: 'Frango à Milanesa', price: 39.99, image: 'https://imgs.search.brave.com/C75f-wax7JibX22jE6RD1THm30QX0d7R1KrPInGoxiY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVlcGZyZWV6ZS5j/b20uYnIvaW1nL3By/YXRvcy9iaWcvaWF2/MDJfZmlsZV9kZV9m/cmFuZ29fYV9taWxh/bmVzYTIxMDgyNTA1/NTkwOC5qcGc' },
        { name: 'Macarrão ao Sugo', price: 24.99, image: 'https://imgs.search.brave.com/OdqWL2E-crnV3RlQ8LWpKyRMnC7ucmJoD40BG-JDWcw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5hbWFyaWFicm9n/dWkuY29tLmJyL2Fz/c2V0cy91cGxvYWRz/L3JlY2VpdGFzL2Zv/dG9zL3VzdWFyaW8t/MjEyNC1mZWRlMDYz/ZDJlNzVmMjljM2Yz/OWY0MmJjNzY0MjRk/MC5qcGc' }
      ]
    },
    {
      name: 'Bebidas',
      products: [
        { name: 'Refrigerante', price: 5.00, image: 'https://imgs.search.brave.com/MiPAXHtmjR4Kl6z8MPZVbqWcMNHJ6OYPZqqc9yD88Yw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9ibG9nZ3Zlcml6YS5jb20vZGVtby9pbWcvcmVmcmVnZXJhbmdlL2ZvcmlsYXMvcGFnZXMvdHJhZG8vcmVmcmVnYW50ZS5qcGc' },
        { name: 'Cerveja', price: 8.50, image: 'https://imgs.search.brave.com/jm8U0o2Q_8Zfhp0aAKTZ_z_-L4gdQWZQpCX3Jx9h8SY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cudmVyaW1hLmNvbS9pbWcvY2VydC9wYWdlcy9wYWdlcy9vdmVydmxpbmUvcGFnZXMvaW5ncmF0ZWFyLmpwZz9yZXNpemU9ODAwJHNpbj1kZWNpc2lvbg' },
        { name: 'Suco Natural', price: 4.50, image: 'https://imgs.search.brave.com/mGHXoaBHDcF7o9OrQlmxt-_ItkPAIv6o7UM2EvZJ7N4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cuY29wbGV0aW5jYXRvcnMuY29tLmJyL2ltYWdlcy9zdWNvLXNhbGFkZS5qcGc' }
      ]
    },
    {
      name: 'Porções',
      products: [
        { name: 'Batata Frita', price: 15.00, image: 'https://imgs.search.brave.com/PG7h63f0APyNeZtKtCv-QL4FhV2gw96dPj8VrvgwOMY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cudmVyaW1hLmNvbS9pbWcvY2VydC9wYWdlcy9wYWdlcy9vdmVydmxpbmUvcGFnZXMvbGFuZC8xMS9iYXRhdGEmY3Rvb2xvdXQ9MDIwJHNpbj1hbHRv' },
        { name: 'Iscas de Frango', price: 18.00, image: 'https://imgs.search.brave.com/f9gFNhD2dH99QY4wn0yDjFIMmD-4ynqTPzD6k7pP1u8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cucGFudG9yZWRvLmNvbS9pbWcvY2VydC9wYWdlcy9wYWdlcy9vdmVydmxpbmUvcGFnZXMvbGFuZC8yMS9pbWcvcHVibGluZ3UvbWFudGVyZWFyLmZpbGUuanBn' },
        { name: 'Linguiça Acebolada', price: 20.00, image: 'https://imgs.search.brave.com/gpAe4AqjzyeS7-hMR6iGHX6hAr8UhbDiK59BXpSc_T4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cucGxhc3RlY2hlbC5jb20vbGFuZC9pbWcvbGFuZC1naWJlL2luZ3JhdGlvbi9saW5ndWljYS1hY2Vib2xhZC5qcGc' }
      ]
    },
    {
      name: 'Sobremesas',
      products: [
        { name: 'Pudim', price: 8.99, image: 'https://imgs.search.brave.com/vgM-2Zh1bRIb26Ar3uf4TzP0hLhf8Ju8T_w9oH1WxFs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWxhdGl2ZS5wb3R0YW1tLmNvbS5ici93cC9jb250ZW50/L2ltYWdlcy9wYWRkYW0vcHVkaW0uanBn' },
        { name: 'Torta de Limão', price: 10.99, image: 'https://imgs.search.brave.com/ZrLfD2qUhzpL3PtCRuNTMwka89xCQ_DiVhvRCnt5l20/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cudmFudGhlcml1bS5jb20vY291cG9udG9uY2VydC90b3J0YS1kZV9saW1hb24uanBn' },
        { name: 'Brownie', price: 9.99, image: 'https://imgs.search.brave.com/o8K4UauKp9cKIS4whMY95JXwvcLX54WlHYuMXU6vWDo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcudW5pdG9wZW1lbnRhbHNoYWxpdGVzLmNvbS9pbWcvYnJvd25pZS5qcGc' }
      ]
    }
  ];

}
