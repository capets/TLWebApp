import {Truck} from "../Models/Truck";
import {IRepository} from "../Interfaces/IRepository";
import {Injectable} from "@angular/core";
import {VehicleCategoriesRepositoryInMemory} from "./vehicle-categories-repository-in-memory";

@Injectable({
  providedIn: 'root'
})
export class TrucksRepositoryInMemory implements IRepository<Truck, number>{
  private readonly _trucks: Array<Truck>;
  constructor() {
    this._trucks = [];

    let truck = new Truck();
    truck.id = 1;
    truck.vehicleCategoryId = 1;
    truck.autoTypeId = 1;
    truck.brand = 'Volvo';
    truck.plateNumber = 'KKK 111';
    truck.vin = 'DFR23232Y44AS';
    truck.itpExpDate = new Date(2021,1,1);
    truck.certCemtExpDate = new Date(2022, 5, 15);
    this._trucks.push(truck);

    truck = new Truck();
    truck.id = 2;
    truck.vehicleCategoryId = 1;
    truck.autoTypeId = 2;
    truck.brand = 'Mercedes';
    truck.plateNumber = 'HGR 005';
    truck.vin = 'HYTF26626262SA';
    truck.itpExpDate = new Date(2022,8,10);
    truck.certCemtExpDate = new Date(2023, 10, 10);
    this._trucks.push(truck);

    truck = new Truck();
    truck.id = 3;
    truck.vehicleCategoryId = 2;
    truck.brand = 'Iveco';
    truck.plateNumber = 'WER 405';
    truck.vin = 'JUUIT53563636GF';
    truck.itpExpDate = new Date(2023,1,1);
    truck.certCemtExpDate = new Date(2021, 8, 20);
    this._trucks.push(truck);

    truck = new Truck();
    truck.id = 4;
    truck.vehicleCategoryId = 2;
    truck.brand = 'Mercedes';
    truck.plateNumber = 'DGG 993';
    truck.vin = 'JUUIT53563636GF';
    truck.itpExpDate = new Date(2023,1,1);
    truck.certCemtExpDate = new Date(2021, 8, 20);
    this._trucks.push(truck);
  }
  Add(item: Truck): void {
    const id = Math.max(...this._trucks.map(x => x.id));
    item.id = id + 1;
    this._trucks.push(item);
  }

  Get(id: number): Truck | undefined {
    return this._trucks.find(x => x.id === id);
  }

  GetAll(): Truck[] {
    return this._trucks;
  }

  Remove(item: Truck): void {
    this._trucks.forEach((element,index)=>{
      if (element.id === item.id){
        this._trucks.splice(index, 1);
        return;
      }
    });
  }

  Update(item: Truck): void {
    const old = this._trucks.find(x => x.id === item.id);
    if (old){
      const idx = this._trucks.indexOf(old);
      this._trucks[idx] = item;
    }
  }
}
