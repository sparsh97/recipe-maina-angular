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
  onMenuClick(feature:string){
    if(feature === 'recipe'){
      this.feature= feature
    } else if(feature ==='shopping-list'){
      this.feature= feature
    }
  }
}
