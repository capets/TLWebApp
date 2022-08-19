import {Injectable, OnInit} from '@angular/core';
import {ITruckRepository} from "../Interfaces/Repositories/ITruckRepository";
import {Truck} from "../Models/Truck";

@Injectable({
  providedIn: 'root'
})
export class TrucksService implements OnInit, ITruckRepository{
  private trucks:Array<Truck>;
  constructor() {
    this.trucks = [
      new Truck(1,'Volvo', 'KKK 111', 'dhjuqdhu73633'),
      new Truck(2,'Mercedes', 'HGR 005', 'dhjuqdhu73633'),
      new Truck(3,'Iveco', 'WER 405', 'dhjuqdhu73633'),
    ]
  }

  ngOnInit(): void {
  }

  Add(truck: Truck): void {
    this.trucks.push(truck);
  }

  GetTruck(id: number): Truck | undefined {
    return this.trucks.find(x => x.id === id);
  }

  GetTrucks(): Truck[] {
    return this.trucks;
  }

  Remove(id: number): void;
  Remove(truck: Truck): void;
  Remove(item: number | Truck): void{
    this.trucks.forEach((element,index)=>{
      if ((typeof(item) === 'number' && element.id === item)
      || (item instanceof Truck && element.id  === item.id)) this.trucks.splice(index, 1);
    });
  };

  Update(truck: Truck): void {
    const oldIdx = this.trucks.find(x => x.id === truck.id)?.id;
    if (oldIdx){
      this.trucks[oldIdx] = truck;
    }
  }
}
