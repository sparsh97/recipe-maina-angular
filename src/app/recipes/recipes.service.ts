import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[]=[
    new Recipe("Chicken","chicken curry","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5064952.jpg&q=85"),
    new Recipe("Mutton","Mutton curry","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5064952.jpg&q=85"),
    new Recipe("Dal-Baati","Pluses curry","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5064952.jpg&q=85"),
  ];

  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
