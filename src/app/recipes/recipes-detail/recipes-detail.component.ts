import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;
  constructor(
    private recipeSerice: RecipesService
  ) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recipeSerice.addIngredientToShoppingList(this.recipeDetail.ingredient)
  }
}
