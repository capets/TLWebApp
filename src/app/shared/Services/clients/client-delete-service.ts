import {DeleteModalService} from "../base/delete-modal-service";
import {BsModalService} from "ngx-bootstrap/modal";
import {ClientsService} from "./clients-service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ClientDeleteService extends DeleteModalService{
  constructor(private clientsService: ClientsService,
              private modalService: BsModalService  ) {
    super(clientsService, modalService);
  }
}
