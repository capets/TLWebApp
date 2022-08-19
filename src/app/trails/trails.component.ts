import { Component, OnInit } from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss']
})
export class TrailsComponent implements OnInit, ITitleComponent {

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return "Remorci";
  }

}
