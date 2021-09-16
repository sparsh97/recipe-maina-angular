import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[]=[];

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor( private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe:Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

}
