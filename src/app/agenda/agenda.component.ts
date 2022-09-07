import { Component, OnInit } from '@angular/core';
import {DatePickerConfig} from "../shared/Helpers/date-picker-config";
import {BsDatepickerConfig, BsLocaleService} from "ngx-bootstrap/datepicker";
import {roLocale} from "ngx-bootstrap/locale";
import {defineLocale} from "ngx-bootstrap/chronos";
import {TasksService} from "../shared/Services/tasks/tasks-service";
import {Task} from "../shared/Models/Task";
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  bsConfig?: Partial<BsDatepickerConfig>;
  tasks: Task[] = [];
  datePipe: DatePipe;
  selectedDate!: Date;
  title?:string;
  constructor(private bsLocaleService: BsLocaleService,
              private datePickerConf: DatePickerConfig,
              private tasksService: TasksService) {
    this.datePipe = new DatePipe('en-US');
  }

  ngOnInit(): void {
    defineLocale('ro', roLocale);
    this.bsLocaleService.use('ro');
    this.bsConfig = this.datePickerConf.get();
    this.selectedDate = new Date();
  }

  private setForSelectedDate(){
    this.tasks = this.tasksService.GetAll().filter(
      x => x.date === this.datePipe.transform( this.selectedDate, 'dd.MM.yyyy')
    );
  }

  onDateChange(value: Date){
    this.selectedDate = value;
    this.setForSelectedDate();
  }

  onDelete(task:Task) {
    this.tasksService.activeModel = task;
    this.tasksService.onDelete();
    this.tasks = this.tasks.filter(x => x.id !== task.id);
  }

  onSubmit(){
    this.tasksService.activeModel = new Task(
      {
        title: this.title,
        date: this.datePipe.transform( new Date(), 'dd.MM.yyyy')
      });
    this.tasksService.onSubmit();
    this.tasks.push(this.tasksService.activeModel);
    this.title = '';
  }
}
