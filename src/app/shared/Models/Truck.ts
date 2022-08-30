import {Vehicle} from "./Vehicle";
import {VehicleCategory} from "./VehicleCategory";
import {VehicleCategoriesRepositoryInMemory} from "../Repositories/vehicle-categories-repository-in-memory";

export class Truck extends Vehicle{
  constructor() {
    super();
  }
  private _vehicleCategoryId!:number;
  fuelConsumptionSummer!:number;
  fuelConsumptionWinter!: number;
  fuelTank!: number;
  certTahoExpDate?: Date;

  get vehicleCategoryId():number{
    return this._vehicleCategoryId;
  }

  set vehicleCategoryId(value){
    this._vehicleCategoryId = value;
  }
}
