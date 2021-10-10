import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;
  constructor(
    private recipeSerice: RecipesService,
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((param: Params) =>{
      this.id = +param['id'];
      this.recipeDetail = this.recipeSerice.getRecipeDetailById(this.id);
    })
   
  }

  onAddToShoppingList() {
    this.recipeSerice.addIngredientToShoppingList(this.recipeDetail.ingredient)
  }

  onEditClick() {
    this.route.navigate(['edit'],{relativeTo : this.router})
  }
}
