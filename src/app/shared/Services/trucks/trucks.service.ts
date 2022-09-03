import {Injectable, OnInit} from '@angular/core';
import {Truck} from "../../Models/Truck";
import {TrucksRepositoryInMemory} from "../../Repositories/trucks-repository-in-memory";
import {Service} from "../base/service";

@Injectable({
  providedIn: 'root'
})
export class TrucksService extends Service<Truck> implements OnInit{
  constructor(private truckRepository: TrucksRepositoryInMemory) {
    super(truckRepository);
  }

  ngOnInit(): void {
  }

  Get(id: number | undefined): Truck | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): Truck[] {
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
