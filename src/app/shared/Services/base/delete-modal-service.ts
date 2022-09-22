import {Component, EventEmitter, Injectable} from '@angular/core';
import {BsModalService, ModalOptions} from "ngx-bootstrap/modal";
import {LocalService} from "./local-service";
import {Service} from "./service";

@Injectable({
  providedIn: 'root'
})
export class DeleteModalService{
  onDeleteItem= new EventEmitter();
  constructor(private service: Service,
              private bvsModalService: BsModalService) {
    this.onDeleteItem = new EventEmitter<any>();
  }
  delete(title: string, text:string): EventEmitter<any>{
    const initialState: ModalOptions = {
      initialState: {
        title: title,
        text: text,
        service: this.service,
        modalService: this.bvsModalService,
        onDeleteItem: this.onDeleteItem
      }
    };
    this.bvsModalService.show<DeleteModalServiceComponent>(DeleteModalServiceComponent, initialState);
    return this.onDeleteItem;
  }
}

@Component({
  template:`
    <div class="modal-header">
      <h5 class="modal-title" [innerHTML]="title"></h5>
    </div>
    <div class="modal-body">
      <h5 class="alert alert-warning" [innerHTML]="text"></h5>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" (click)="modalService?.hide()">Nu</button>
      <button type="button" class="btn btn-danger" (click)="onDelete();onDeleteItem?.emit();modalService?.hide()">Da</button>
    </div>
  `
})
export class DeleteModalServiceComponent {
  title?: string;
  text?: string;
  service?: Service;
  model?: any;
  modalService?: BsModalService;
  onDeleteItem?: EventEmitter<any>
  constructor() { }

  onDelete() {
    this.service?.onDelete(this.service.activeModel.id);
  }
}
