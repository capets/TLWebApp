import {Component, Input} from '@angular/core';
import { NgModel} from "@angular/forms";
import {ValidationHelper} from "../../Helpers/validation-helper";

@Component({
  selector: 'app-validation-summary',
  template: `
    <div class="validation-summary" *ngIf="isInvalid">
      <div *ngFor="let key of validationMessagesKeys">
        <div *ngIf="key === appValidationModel.name">
          <div *ngFor="let validation of validation_messages.get(key)">
            <div class="alert alert-danger"
                 *ngIf="appValidationModel?.hasError(validation.type)">
              {{ validation.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./validation-summary.component.scss']
})
export class ValidationSummaryComponent {
  @Input() appValidationModel!: NgModel;
  readonly validation_messages: Map<string, any[]>;
  constructor() {
    this.validation_messages = ValidationHelper.getValidationMessages()
  }

  get isInvalid(){
    return this.appValidationModel?.invalid
      && (this.appValidationModel?.dirty || this.appValidationModel?.touched)
  }

  get validationMessagesKeys(): string[]{
    return Array.from(this.validation_messages.keys());
  }
}
