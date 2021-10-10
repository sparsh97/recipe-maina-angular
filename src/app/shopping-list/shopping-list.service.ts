import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients:Ingredient[] = [
    new Ingredient("Tomato",4),
    new Ingredient("Apple",4),
   ];

   ingredientAdded = new Subject<Ingredient[]>();
  constructor() { }

  getIngredients() {
     return this.ingredients.slice();
  }

  onIngredientAdd(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice())
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients){
    //   this.onIngredientAdd(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
