import { Component } from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements ITitleComponent {

  constructor() { }

  ngOnInit(): void {
  }
  get Title(): string {
    return "Curse si Comenzi";
  }

}
