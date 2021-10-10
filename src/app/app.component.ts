import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  recipe: boolean =true;
  shopping: boolean =false;
  feature: string = 'recipe';
  
}
