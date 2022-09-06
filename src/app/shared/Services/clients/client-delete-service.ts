import {DeleteModalService} from "../base/delete-modal-service";
import {BsModalService} from "ngx-bootstrap/modal";
import {ClientService} from "./client-service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ClientDeleteService extends DeleteModalService{
  constructor(private clientsService: ClientService,
              private modalService: BsModalService  ) {
    super(clientsService, modalService);
  }
}
