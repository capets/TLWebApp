import {EventEmitter, Injectable, Injector, Input, OnInit} from "@angular/core";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {DatePickerConfig} from "../../Helpers/DatePickerConfig";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {Service} from "./Service";
import {EditHelper} from "../../Helpers/EditHelper";
import {ColorByDate} from "../../Helpers/ColorByDate";
import {defineLocale} from "ngx-bootstrap/chronos";
import {roLocale} from "ngx-bootstrap/locale";
defineLocale('ro', roLocale);

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
  }

  ngOnInit(): void {
    this.model = this.modelsService.activeModel;
    this.bsLocaleService.use('ro');
  }

  onFocusIn(input: any){
    EditHelper.clearIfZero(input);
  }

  onFocusOut(input: any){
    EditHelper.zeroIfClear(input);
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

