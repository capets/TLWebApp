import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DatePickerConfig{
  get(){
    return Object.assign({},{
      dateInputFormat: 'DD.MM.YYYY',
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      showTodayButton: true,
      todayButtonLabel: 'Ziua curenta'
    });
  }
}
