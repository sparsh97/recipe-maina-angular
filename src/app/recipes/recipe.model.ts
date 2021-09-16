import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
   public name : string;
   public description : string;
   public image : string;
   public ingredient: Ingredient[];

   constructor(name: string, description: string, image:string, ingredient: Ingredient[]){
       this.name = name;
       this.description = description;
       this.image = image;
       this.ingredient = ingredient;
   }
}
