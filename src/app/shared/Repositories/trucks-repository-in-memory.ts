import {Truck} from "../Models/Truck";
import {IRepository} from "../Interfaces/IRepository";
import {Injectable} from "@angular/core";
import {VehicleCategoriesRepositoryInMemory} from "./vehicle-categories-repository-in-memory";
import {AutoTypesRepositoryInMemory} from "./auto-types-repository-in-memory";

@Injectable({
  providedIn: 'root'
})
export class TrucksRepositoryInMemory implements IRepository<Truck, number>{
  private readonly _trucks: Array<Truck>;
  constructor(private vehicleCategoriesRepository: VehicleCategoriesRepositoryInMemory,
              private autoTypesRepository: AutoTypesRepositoryInMemory) {
    this._trucks = [
      new Truck({
        id: 1,
        vehicleCategoryId: 1,
        autoTypeId:  1,
        brand:  'Volvo',
        plateNumber:  'KKK 111',
        vin:  'DFR23232Y44AS',
        itpExpDate:  new Date(2021,1,1),
        certCemtExpDate:  new Date(2022, 5, 15)
      }),
      new Truck({
        id: 2,
        vehicleCategoryId: 1,
        autoTypeId: 2,
        brand:  'Mercedes',
        plateNumber: 'HGR 005',
        vin: 'HYTF26626262SA',
        itpExpDate:  new Date(2022,8,10),
        certCemtExpDate:  new Date(2023, 10, 10)
      }),
      new Truck({
        id: 3,
        vehicleCategoryId: 2,
        brand: 'Iveco',
        plateNumber: 'WER 405',
        vin: 'JUUIT53563636GF',
        itpExpDate: new Date(2023, 1, 1),
        certCemtExpDate:  new Date(2021, 8, 20)
      })
    ];
  }

  Add(item: Truck): void {
    const id = this._trucks.length > 0
      ? Math.max(...this._trucks.map(x => x.id)) : 0;
    item.id = id + 1;
    this._trucks.push(item);
  }

  Get(id: number): Truck | undefined {
    const truck = this._trucks.find(x => x.id === id);
    this.setNavigationProperties(truck);
    return truck;
  }

  GetAll(): Truck[] {
    this._trucks.forEach(x => this.setNavigationProperties(x));
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

  private setNavigationProperties(item?: Truck){
    if(!item) return;

    item.autoType = this.autoTypesRepository.Get(item.autoTypeId);
    item.vehicleCategory = this.vehicleCategoriesRepository.Get(item.vehicleCategoryId);
  }
}
