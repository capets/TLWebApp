import {Component, Injectable } from '@angular/core';
import {BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {Service} from "./Service";
import {TrailsService} from "../trails/trails.service";

@Injectable({
  providedIn: 'root'
})
export class DeleteModalService{
  constructor(private service: Service<any>,
              private bvsModalService: BsModalService) {
  }
  delete(title: string, text:string){
    const initialState: ModalOptions = {
      initialState: {
        title: title,
        text: text,
        service: this.service,
        modalService: this.bvsModalService
      }
    };
    this.bvsModalService.show<DeleteModalServiceComponent>(DeleteModalServiceComponent, initialState);
  }
}

@Component({
  template:`
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
    </div>
    <div class="modal-body">
      <h5 class="alert alert-warning">{{text}}</h5>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="modalService?.hide()">Nu</button>
      <button type="button" class="btn btn-danger" (click)="service?.onDelete();modalService?.hide()">Da</button>
    </div>
  `
})
export class DeleteModalServiceComponent {
  title?: string;
  text?: string;
  service?: Service<any>;
  model?: any;
  modalService?: BsModalService
  constructor() { }
}
