import {AfterViewInit, Component, Injectable} from '@angular/core';
import {DatePickerConfig} from "../../Helpers/date-picker-config";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {TrailsService} from "./trails.service";
import {Trail} from "../../Models/Trail";
import {BsModalService} from "ngx-bootstrap/modal";
import {EditModalService} from "../base/edit-modal-service";
import {TrailCategoriesService} from "./trail-categories-service";
import {AutoTypesService} from "../base/auto-types-service";
import {TrailCategory} from "../../Models/TrailCategory";
import {AutoType} from "../../Models/AutoType";
import {ValidationHelper} from "../../Helpers/validation-helper";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-trail-editor',
  templateUrl: './trail-editor-service-component.html',
  styleUrls: ['./trail-editor-service-component.scss']
})
export class TrailEditorServiceComponent extends EditModalService<Trail> implements AfterViewInit{
  categories?:TrailCategory[];
  autoTypes?:AutoType[];
  constructor(private trailsService: TrailsService,
              private trailCategoriesService: TrailCategoriesService,
              private autoTypesService: AutoTypesService,
              private datePickerConf: DatePickerConfig,
              private localeService: BsLocaleService,
              private modalService: BsModalService,
              public validationHelper: ValidationHelper ) {
    super(trailsService, datePickerConf, localeService, modalService);
    this.model = new Trail();
  }

  showModal(): void {
    this.modalService.show(TrailEditorServiceComponent, {class: 'modal-xl'});
  }

  ngAfterViewInit(): void {
    this.categories = this.trailCategoriesService.GetAll();
    this.autoTypes = this.autoTypesService.GetAll();
  }
}
