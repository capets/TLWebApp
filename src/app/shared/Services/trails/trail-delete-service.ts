import {DeleteModalService} from "../base/delete-modal-service";
import {Trail} from "../../Models/Trail";
import {BsModalService} from "ngx-bootstrap/modal";
import {TrailsService} from "./trails.service";
import {Injectable} from "@angular/core";

@Injectable( {providedIn:'root'})
export class TrailDeleteService extends DeleteModalService{
  constructor(private trailsService: TrailsService,
              private modalService: BsModalService) {
    super(trailsService, modalService);
  }
}
