import {Component, EventEmitter, OnInit} from '@angular/core';
import {Route} from "../shared/Models/Route";

@Component({
  selector: 'app-routes-and-orders',
  templateUrl: './routes-and-orders.component.html',
  styleUrls: ['./routes-and-orders.component.scss']
})
export class RoutesAndOrdersComponent implements OnInit {
  selectedRoute!: Route;
  onRouteSelected: EventEmitter<Route>;
  constructor() {
    this.onRouteSelected = new EventEmitter<Route>();
  }

  ngOnInit(): void {
  }
  onRouteSelect(item: Route){
    this.selectedRoute = item;
    this.onRouteSelected.emit(item);
  }
}
