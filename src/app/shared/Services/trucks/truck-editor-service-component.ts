import {AfterViewInit, Component, Injectable} from '@angular/core';
import {TrucksService} from "./trucks.service";
import {Truck} from "../../Models/Truck";
import {DatePickerConfig} from '../../Helpers/DatePickerConfig'
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {EditModalService} from "../base/edit-modal-service";
import {BsModalService} from "ngx-bootstrap/modal";
import {VehicleCategoriesService} from "./vehicle-categories-service";
import {VehicleCategory} from "../../Models/VehicleCategory";
import {AutoTypesService} from "../base/auto-types-service";
import {AutoType} from "../../Models/AutoType";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-truck-edit',
  templateUrl: './truck-editor-service-component.html',
  styleUrls: ['./truck-editor-service-component.scss']
})
export class TruckEditorServiceComponent extends EditModalService<Truck> implements AfterViewInit{
  categories?:VehicleCategory[];
  autoTypes?:AutoType[];
  constructor(private trucksService: TrucksService,
              private autoTypesService:AutoTypesService,
              private vehicleCategoriesService: VehicleCategoriesService,
              private datePickerConf: DatePickerConfig,
              private localeService: BsLocaleService,
              private modalService: BsModalService) {
    super(trucksService, datePickerConf, localeService, modalService);
    this.model = new Truck();
  }

  showModal(): void {
    this.modalService.show(TruckEditorServiceComponent, {class: 'modal-xl'});
  }

  ngAfterViewInit(): void {
    this.categories = this.vehicleCategoriesService.GetAll();
    this.autoTypes = this.autoTypesService.GetAll();
  }

  get selectedAutoType():number{
    return this.model.vehicleCategoryId == 2 ? 0
      : this.model.autoTypeId; //daca cap tractor -> 0
  }
  set selectedAutoType(value){
    this.model.autoTypeId = value;
  }
}
