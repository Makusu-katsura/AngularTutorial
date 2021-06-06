import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name=null;
  loadedFeature='recipe';
  constructor(){
    // this.name='hey'
  }
  onNavigate(feature:string){
    this.loadedFeature=feature
  }
}
