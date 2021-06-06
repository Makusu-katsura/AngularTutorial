import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipies } from 'src/app/models/recipies';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe:Recipies
  // @Output() recipeSelected= new EventEmitter<void>();
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
    // this.recipeSelected.emit();
  }
}
