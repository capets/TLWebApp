import {DeleteModalService} from "../base/delete-modal-service";
import {BsModalService} from "ngx-bootstrap/modal";
import {Injectable} from "@angular/core";
import {DriversService} from "./drivers.service";

@Injectable( {providedIn:'root'})
export class  DriverDeleteService extends DeleteModalService{
  constructor(private driverService: DriversService,
              private modalService: BsModalService  ) {
    super(driverService, modalService);
  }
}
