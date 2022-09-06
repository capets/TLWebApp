import {Component, Injectable} from '@angular/core';
import {EditModalService} from "../base/edit-modal-service";
import {Client} from "../../Models/Client";
import {DatePickerConfig} from "../../Helpers/date-picker-config";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {BsModalService} from "ngx-bootstrap/modal";
import {ClientService} from "./client-service";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-client-edit-service',
  templateUrl: './client-edit-service.component.html',
  styleUrls: ['./client-edit-service.component.scss']
})
export class ClientEditServiceComponent extends EditModalService<Client>{

  constructor(private clientService: ClientService,
              private datePickerConf: DatePickerConfig,
              private localeService: BsLocaleService,
              private modalService: BsModalService) {
    super(clientService, datePickerConf, localeService, modalService);
  }

  showModal(): void {
    this.modalService.show(ClientEditServiceComponent, {class: 'modal-lg'});
  }
}
