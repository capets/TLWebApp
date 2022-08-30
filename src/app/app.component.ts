import {Component} from '@angular/core';

import {TopbarComponent} from "./topbar/topbar.component";
import {ITitleComponent} from "./shared/Interfaces/ITitleComponent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Transport si Logistica';
  constructor() { }

  onRouteActivate(component: ITitleComponent) {
    TopbarComponent.title = component.Title;
  }
}
