import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { Recipies } from '../models/recipies';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit,OnChanges {
  selectedRecipe:Recipies;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe:Recipies)=>{
      this.selectedRecipe=recipe
    })
    console.log(this.selectedRecipe)
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(this.selectedRecipe)
  }
  
}
