import {Component, EventEmitter, Input, Output} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'modal-component',
  template: `
    <div class="modal-header">
      <h5 class="modal-title">{{ title }}</h5>
      <button type="button" class="btn-close"
              (click)="onDecline.emit()">
      </button>
    </div>
    <div class="modal-body">
      <ng-content></ng-content>
    </div>
    <div class="modal-footer">
      <button type="button"
              class="btn btn-primary"
              [disabled]="form.invalid"
              (click)="onSubmit.emit()">Salveaza</button>
      <button type="button"
              class="btn btn-secondary"
              (click)="onDecline.emit()">Anuleaza</button>
    </div>
  `
})
export class ModalComponent {
@Input() title?: string;
@Input() form!: NgForm;
@Output() onSubmit: EventEmitter<void>;
@Output() onDecline: EventEmitter<void>;

  constructor() {
    this.onSubmit = new EventEmitter();
    this.onDecline = new EventEmitter();
  }
}
