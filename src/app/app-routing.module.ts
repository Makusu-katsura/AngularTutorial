import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes =[
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent},
  {path:'shopping-list',component:ShoppingListComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
