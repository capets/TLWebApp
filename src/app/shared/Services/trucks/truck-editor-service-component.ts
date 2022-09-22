import {Component, Injectable, OnInit} from '@angular/core';
import {TrucksService} from "./trucks.service";
import {Truck} from "../../Models/Truck";
import {DatePickerConfig} from '../../Helpers/date-picker-config'
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {EditModalService} from "../base/edit-modal-service";
import {BsModalService} from "ngx-bootstrap/modal";
import {VehicleCategoriesService} from "./vehicle-categories-service";
import {VehicleCategory} from "../../Models/VehicleCategory";
import {AutoTypesService} from "../base/auto-types-service";
import {AutoType} from "../../Models/AutoType";
import {ValidationHelper} from "../../Helpers/validation-helper"

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-truck-edit',
  templateUrl: './truck-editor-service-component.html',
  styleUrls: ['./truck-editor-service-component.scss']
})
export class TruckEditorServiceComponent extends EditModalService<Truck> implements OnInit  {
  categories?: VehicleCategory[] ;
  autoTypes?: AutoType[];

  constructor(private trucksService: TrucksService,
              private autoTypesService: AutoTypesService,
              private vehicleCategoriesService: VehicleCategoriesService,
              private datePickerConf: DatePickerConfig,
              private localeService: BsLocaleService,
              private modalService: BsModalService,
              public validationHelper: ValidationHelper) {
    super(trucksService, datePickerConf, localeService, modalService);
  }

  showModal(): void {
    this.modalService.show(TruckEditorServiceComponent, {class: 'modal-xl'});
  }

  override ngOnInit(): void {
    this.vehicleCategoriesService.GetAll()
      .subscribe(x => this.categories = x);
    this.autoTypesService.GetAll()
      .subscribe((x =>  this.autoTypes = x));
    super.ngOnInit();
  }

  get selectedAutoType(): number {
    return this.model.vehicleCategoryId == 2 ? -1 //cap tractor
      : this.model.autoTypeId;
  }
  set selectedAutoType(value) {
    this.model.autoTypeId = value;
  }
}
