import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameImputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(
    private shoppingService: ShoppingListService
  ) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingreName = this.nameImputRef.nativeElement.value;
    const ingreAmount = this.amountInputRef.nativeElement.value;
    const newIngre = new Ingredient(ingreName,ingreAmount);
    this.shoppingService.ingredientAdded.emit(newIngre);
  }
}
