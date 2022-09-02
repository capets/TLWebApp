import {Component, Injectable} from '@angular/core';
import {EditModalService} from "../base/edit-modal-service";
import {Driver} from "../../Models/Driver";
import {DatePickerConfig} from "../../Helpers/date-picker-config";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {BsModalService} from "ngx-bootstrap/modal";
import {DriversService} from "./drivers.service";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-driver-edit-service',
  templateUrl: './driver-edit-service.component.html',
  styleUrls: ['./driver-edit-service.component.scss']
})
export class DriverEditServiceComponent extends EditModalService<Driver> {

  constructor(private driverService: DriversService,
              private datePickerConf: DatePickerConfig,
              private localeService: BsLocaleService,
              private modalService: BsModalService) {
    super(driverService, datePickerConf, localeService, modalService);
  }

  showModal(): void {
    this.modalService.show(DriverEditServiceComponent, {class: 'modal-lg'});
  }

}
