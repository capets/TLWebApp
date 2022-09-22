import {Injectable} from '@angular/core';
import {Driver} from "../../Models/Driver";
import {RemoteService} from "../base/remote-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DriversService extends RemoteService<Driver>{
  constructor(private http: HttpClient) {
    super(Driver,'Drivers', http);
  }

  onSubmit(): void {
    if (this._model.id > 0){
      this.onUpdate();
    }
    else{
      this.onAdd();
    }
  }
}
