import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChange=new EventEmitter<Ingredient[]>()
  private ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Tomatoes',10)
  ]
  constructor() { }
  getIngredients(){
    return this.ingredients.slice()
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientChange.emit(this.ingredients.slice())
  }
  addIngredients(ingredients:Ingredient[]){
    // for(let ingredient of ingredients)
    // {
    //   this.addIngredients(ingredient)
    // }
    this.ingredients.push(...ingredients)
    this.ingredientChange.emit(this.ingredients.slice())
  }
}
