import { Component, Input, OnInit } from '@angular/core';
import { Recipies } from 'src/app/models/recipies';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipies
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientToSLService(this.recipe.ingredient)
  }
}
