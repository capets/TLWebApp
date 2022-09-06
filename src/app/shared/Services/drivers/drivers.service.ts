import {Injectable, OnInit} from '@angular/core';
import {Service} from "../base/service";
import {Driver} from "../../Models/Driver";
import {DriversRepositoryInMemory} from "../../Repositories/drivers-repository-in-memory";

@Injectable({
  providedIn: 'root'
})
export class DriversService extends Service<Driver>{
  constructor(private driverRepository: DriversRepositoryInMemory) {
    super(driverRepository);
  }
  Get(id: number | undefined): Driver | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }
  GetAll(): Driver[] {
    return this.repository.GetAll();
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
