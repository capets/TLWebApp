import {AfterViewInit, Component, Injectable} from '@angular/core';
import {EditModalService} from "../base/edit-modal-service";
import {Route} from "../../Models/Route";
import {DatePickerConfig} from "../../Helpers/date-picker-config";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {BsModalService} from "ngx-bootstrap/modal";
import {RoutesService} from "./routes-service";
import {Truck} from "../../Models/Truck";
import {Trail} from "../../Models/Trail";
import {Driver} from "../../Models/Driver";
import {TrucksService} from "../trucks/trucks.service";
import {TrailsService} from "../trails/trails.service";
import {DriversService} from "../drivers/drivers.service";
import {StatusesServices} from "../base/statuses-service";
import {Status} from "../../Models/Status";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-route-edit-service',
  templateUrl: './route-edit-service.component.html',
  styleUrls: ['./route-edit-service.component.scss']
})
export class RouteEditServiceComponent extends EditModalService<Route> implements AfterViewInit {
  trucks!: Truck[];
  trails!: Trail[];
  drivers!: Driver[];
  statuses!: Status[];
  constructor(private routeService: RoutesService,
              private datePickerConf: DatePickerConfig,
              private localeService: BsLocaleService,
              private modalService: BsModalService,
              private trucksService: TrucksService,
              private trailsService: TrailsService,
              private driversService: DriversService,
              private statusesService: StatusesServices) {
    super(routeService, datePickerConf, localeService, modalService);
  }

  showModal(): void {
    this.modalService.show(RouteEditServiceComponent, {class: 'modal-lg'});
  }

  ngAfterViewInit(): void {
    this.trucks = this.trucksService.GetAll();
    this.trails = this.trailsService.GetAll();
    this.drivers = this.driversService.GetAll();
    this.statuses = this.statusesService.GetAll();
  }
}
