import { Component, OnInit } from '@angular/core';
import {DatePickerConfig} from "../shared/Helpers/date-picker-config";
import {BsDatepickerConfig, BsLocaleService} from "ngx-bootstrap/datepicker";
import {roLocale} from "ngx-bootstrap/locale";
import {defineLocale} from "ngx-bootstrap/chronos";

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  bsConfig?: Partial<BsDatepickerConfig>;
  constructor(private bsLocaleService: BsLocaleService,
              private datePickerConf: DatePickerConfig) {
  }

  ngOnInit(): void {
    defineLocale('ro', roLocale);
    this.bsLocaleService.use('ro');
    this.bsConfig = this.datePickerConf.get();
  }
}
