import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";
import {RoutesService} from "../shared/Services/routes/routes-service";
import {Route} from "../shared/Models/Route";
import {RouteDeleteService} from "../shared/Services/routes/route-delete-service";
import {RouteEditServiceComponent} from "../shared/Services/routes/route-edit-service.component";
import {StatusesServices} from "../shared/Services/base/statuses-service";
import {Status} from "../shared/Models/Status";

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements ITitleComponent, OnInit {
  routes!: Route[];
  selectedRouteId: number = 0;
  statuses!: Status[];
  @Output() onRouteSelect: EventEmitter<Route>;
  filterStatusId:number = -1;

  constructor(private routesService: RoutesService,
              private routeEditService: RouteEditServiceComponent,
              private routeDeleteService: RouteDeleteService,
              private statusesService: StatusesServices) {
    this.onRouteSelect = new EventEmitter<Route>();
  }

  refreshRoutes(): void{
    this.selectedRouteId = 0;
    this.routes = this.routesService.GetAll()
      .filter(x => this.filterStatusId < 0 || x.statusId === this.filterStatusId);
  }

  ngOnInit(): void {
    this.statuses = this.statusesService.GetAll().map(object => ({ ...object }));
    this.statuses.push(new Status({id: -1 , name: 'Toate'}));
    this.refreshRoutes();
  }

  get Title(): string {
    return "Curse si Comenzi";
  }

  onDelete(route: Route) {
    this.routesService.activeModel = route;
    this.routeDeleteService.delete('Eliminare cursa', `Esti sigur ca doresti sa elimini cursa<br>${route.wayBill}?`)
      .subscribe(x => this.onRouteSelect.emit());
  }

  onEditClick(route: Route) {
    this.selectedRouteId = route.id;
    this.routesService.activeModel = Object.assign(new Route(), route);
    this.routeEditService.edit().subscribe(x => this.afterEdit());
  }

  onAddClick() {
    this.routesService.activeModel = new Route();
    this.routeEditService.edit().subscribe(x => this.afterEdit());
  }

  private afterEdit():void{
    this.onRouteSelect.emit(this.routesService.activeModel)
  }
}
