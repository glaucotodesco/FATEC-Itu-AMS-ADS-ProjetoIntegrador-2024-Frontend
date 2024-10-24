import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./pages/products/products.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
