import {DeleteModalService} from "../base/delete-modal-service";
import {TrucksService} from "./trucks.service";
import {BsModalService} from "ngx-bootstrap/modal";
import {Injectable} from "@angular/core";

@Injectable( {providedIn:'root'})
export class  TruckDeleteService extends DeleteModalService{
  constructor(private truckService: TrucksService,
              private modalService: BsModalService  ) {
    super(truckService, modalService);
  }
}
