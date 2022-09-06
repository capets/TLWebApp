import { Component} from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements ITitleComponent {
  constructor() { }

  get Title(): string {
    return "";
  }
}
