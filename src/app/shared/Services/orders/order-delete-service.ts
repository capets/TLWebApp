import {Injectable} from "@angular/core";
import {DeleteModalService} from "../base/delete-modal-service";
import {OrdersService} from "./orders-service";
import {BsModalService} from "ngx-bootstrap/modal";

@Injectable({
  providedIn: 'root'
})
export class OrderDeleteService extends DeleteModalService{
  constructor(private ordersService: OrdersService,
              private modalService: BsModalService) {
    super(ordersService, modalService);

  }

}
