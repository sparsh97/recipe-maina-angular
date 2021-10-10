import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipes!:any;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();
  constructor(
    private recipeService: RecipesService
  ) { }

  ngOnInit(): void {
  }

 }
