import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor( private recipeService: RecipesService,
    private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.route.navigate(['new'], {relativeTo: this.router})
  }

}
