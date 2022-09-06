import {Vehicle} from "./Vehicle";

export class Truck extends Vehicle{
  constructor() {
    super();
    this._vehicleCategoryId = 0;
  }
  private _vehicleCategoryId:number;
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
