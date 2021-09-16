import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[];
  // ingredients:Ingredient[]=[];
  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe((res: Ingredient[]) =>{
      this.ingredients=res;
    })
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
