import {Injectable, OnInit} from '@angular/core';
import {Truck} from "../../Models/Truck";
import {RemoteService} from "../base/remote-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrucksService extends RemoteService<Truck>{
  constructor(private http: HttpClient) {
    super(Truck,'Trucks', http);
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
