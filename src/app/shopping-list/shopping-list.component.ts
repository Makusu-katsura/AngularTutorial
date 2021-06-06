import { Component, Input, OnInit } from '@angular/core';
import {Ingredient} from '.././models/ingredient'
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  // ingredients:Ingredient[]=[
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10)
  // ]
  @Input() ingredients
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients()
    this.shoppingListService.ingredientChange.subscribe((ingredient:Ingredient[])=>{
      this.ingredients=ingredient
    })
  }
  // onIngredientAdded(ingredient:Ingredient){
  //   // this.ingredients.push(ingredient)
  //   // console.log(this.ingredients)
  //   // this.shoppingListService.addIngredients(ingredient)
  // }
}
