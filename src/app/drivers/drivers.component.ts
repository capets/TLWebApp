import { Component, OnInit } from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit, ITitleComponent {

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return "Soferi";
  }

}
