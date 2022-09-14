import {EventEmitter, Injectable, Input, OnInit} from "@angular/core";
import {BsModalService} from "ngx-bootstrap/modal";
import {DatePickerConfig} from "../../Helpers/date-picker-config";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {Service} from "./service";
import {EditHelper} from "../../Helpers/edit-helper";
import {ColorByDate} from "../../Helpers/color-by-date";
import {defineLocale} from "ngx-bootstrap/chronos";
import {roLocale} from "ngx-bootstrap/locale";


@Injectable({
  providedIn: 'root'
})
export abstract class EditModalService<T> implements OnInit{
  @Input() model!: T;
  editItem= new EventEmitter();
  protected constructor(private modelsService: Service<T>,
              public pickerConfig: DatePickerConfig,
              private bsLocaleService: BsLocaleService,
              private bsModalService: BsModalService) {
    roLocale.invalidDate = '';
    defineLocale('ro', roLocale);
    this.bsLocaleService.use('ro');
    bsModalService.config.backdrop = 'static';
  }

  ngOnInit(): void {
    this.model = this.modelsService.activeModel;
  }

  onFocusIn(input: any){
    EditHelper.clearIfZero(input.target);
  }

  onFocusOut(input: any){
    EditHelper.zeroIfClear(input.target);
  }

  getColor(date: any){
    return ColorByDate.getForInput(date);
  }
  abstract showModal():void;

  edit():EventEmitter<any>{
    this.showModal();
    this.bsModalService?.onHide?.subscribe(x => this.editItem.emit());
    return this.editItem;
  }

  decline(): void {
    this.bsModalService.hide();
  }

  confirmSubmit() {
    this.modelsService.onSubmit();
    this.bsModalService.hide();
  }
}

