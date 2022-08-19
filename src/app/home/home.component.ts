import { Component, OnInit } from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, ITitleComponent {

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return "";
  }

}
