import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  // recipes: Recipe[]=[
  //   new Recipe("Chicken","chicken curry","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5064952.jpg&q=85")
  // ];
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
