import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  @Input() selectedCategory: string | null = null;

  categories = [
    {
      name: 'Entradas',
      products: [
        { name: 'Brusqueta de Carne', price: 9.99, image: 'https://imgs.search.brave.com/eefgdcxCsMnuctAxODrACcPfnbQpm56DoMME78bF0Uo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2VudHJh/bGJsb2dzLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMi9icnVzY2hl/dHRhLWl0YWxpYW5h/LmpwZz9yZXNpemU9/ODAwLDUzMCZzc2w9/MQ' },
        { name: 'Salada Caesar', price: 12.99, image: 'https://static.itdg.com.br/images/640-400/3f0787cb6db2f0db10269fc45bd8abee/shutterstock-1078415420.jpg' },
        { name: 'Coxinha', price: 6.99, image: 'https://receitasdeaz.com.br/wp-content/uploads/2024/06/coxinhas-de-frango.webp' }
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
        { name: 'Refrigerante', price: 5.00, image: 'https://img.freepik.com/fotos-premium/ai-image-generator-a-coca-cola-e-um-refrigerante-carbonatado-vendido-nas-lojas_977285-9096.jpg?w=740' },
        { name: 'Cerveja', price: 8.50, image: 'https://cdn.shopify.com/s/files/1/0054/6682/files/how_to_make_beer_480x480.jpg?v=1682910325' },
        { name: 'Suco Natural', price: 4.50, image: 'https://cantinagoodlanche.com.br/wp-content/uploads/2020/07/beneficios-dos-sucos-naturais-1-alfa-hotel.jpg ' }
      ]
    },
    {
      name: 'Porções',
      products: [
        { name: 'Batata Frita', price: 15.00, image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRFiWUbLK4cmvufUljGHhn1ifqaOkZZzebdCUE347QUG092UcSatzeChPwpBPY-RLQW' },
        { name: 'Iscas de Frango', price: 18.00, image: 'https://anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-2847-f58205be67bef7c46637384f4627de28.JPG' },
        { name: 'Linguiça Acebolada', price: 20.00, image: 'https://static.itdg.com.br/images/640-400/70acb497226f5a39eafd73cab3d15509/343137-original.jpg' }
      ]
    },
    {
      name: 'Sobremesas',
      products: [
        { name: 'Pudim', price: 8.99, image: 'https://static.itdg.com.br/images/640-400/3727a5e9857b50aa40fad2ebeeb7724f/63328-263980-original.jpg' },
        { name: 'Torta de Limão', price: 10.99, image: 'https://static.itdg.com.br/images/640-400/634823f4b89083718f7457a7d17cbeaf/319681-original.jpg' },
        { name: 'Brownie', price: 9.99, image: 'https://static.itdg.com.br/images/640-420/5d139b703a9df7604abf863a3bd76aa6/252863-shutterstock-1938293728.jpg' }
      ]
    }
  ];

  getProductsForSelectedCategory() {
    const category = this.categories.find(cat => cat.name === this.selectedCategory);
    return category ? category.products : [];
  }

}
