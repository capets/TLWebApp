import {Injectable} from "@angular/core";
import {DeleteModalService} from "../base/delete-modal-service";
import {RoutesService} from "./routes-service";
import {BsModalService} from "ngx-bootstrap/modal";

@Injectable({
  providedIn: 'root'
})
export class RouteDeleteService extends DeleteModalService{
  constructor(private routeService: RoutesService,
              private modalService: BsModalService ) {
    super(routeService, modalService);
  }
}
