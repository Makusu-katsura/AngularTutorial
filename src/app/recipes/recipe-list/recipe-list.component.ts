import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipies} from '../../models/recipies'
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected =new EventEmitter<Recipies>()
  recipes:Recipies[];
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    // console.log(this.recipeWasSelected)
    this.recipes=this.recipeService.getRecipe()
  }
  // onRecipeSelected(recipe:Recipies){
  //   this.recipeWasSelected.emit(recipe)
  //   // console.log(recipe)
  // }
}
