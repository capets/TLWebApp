import {Vehicle} from "./Vehicle";
import {VehicleCategory} from "./VehicleCategory";

export class Truck extends Vehicle{
  constructor(model?: any) {
    super(model);
    if (model){
      this._vehicleCategoryId = model.vehicleCategoryId;
    }
  }

  get vehicleCategory(): VehicleCategory | undefined {
    return this._vehicleCategory;
  }
  set vehicleCategory(value: VehicleCategory | undefined) {
    this._vehicleCategory = value;
  }

  get vehicleCategoryId():number{
    return this._vehicleCategoryId;
  }
  set vehicleCategoryId(value){
    this._vehicleCategoryId = value;
  }
  private _vehicleCategoryId!:number;
  private _vehicleCategory: VehicleCategory | undefined;
  fuelConsumptionSummer!:number;
  fuelConsumptionWinter!: number;
  fuelTank!: number;
  certTahoExpDate?: Date;
}
