import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {

  recipes: Recipe[]=[
    new Recipe("Chicken","chicken curry","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5064952.jpg&q=85",[
      new Ingredient('Chicken',1),
      new Ingredient('Masala',1),
      new Ingredient('Utensils',1)
    ]),
    new Recipe("Mutton","Mutton curry","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5064952.jpg&q=85",[]),
    new Recipe("Dal-Baati","Pluses curry","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5064952.jpg&q=85",[]),
  ];

  recipeSelected = new EventEmitter<Recipe>();
  constructor(
    private slService: ShoppingListService
  ) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredientsToShoppingList(ingredients);
  }

}
