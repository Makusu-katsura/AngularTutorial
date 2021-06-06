import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { Recipies } from '../models/recipies';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected=new EventEmitter<Recipies>()
  private recipes:Recipies[]=[
    new Recipies('Schnitzel','this is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Meat',1),
      new Ingredient('French Fries',20)
    ]),
    new Recipies('Burger','this is simply a test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',[
      new Ingredient('Bun',2),
      new Ingredient('Meat',1)

    ])

  ]
  constructor(private slService:ShoppingListService) { }
  getRecipe(){
    return this.recipes.slice();
  }
  addIngredientToSLService(ingredient:Ingredient[]){
    this.slService.addIngredients(ingredient)
  }
}
