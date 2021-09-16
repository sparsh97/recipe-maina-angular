import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredients:Ingredient[] = [
    new Ingredient("Tomato",4),
    new Ingredient("Apple",4),
   ];

   ingredientAdded = new EventEmitter<Ingredient[]>();
  constructor() { }

  getIngredients() {
     return this.ingredients.slice();
  }

  onIngredientAdd(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice())
  }
}
