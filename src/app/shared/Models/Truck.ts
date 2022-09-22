import {Vehicle} from "./Vehicle";
import {VehicleCategory} from "./VehicleCategory";
import {ITitleComponent} from "../Interfaces/ITitleComponent";

export class Truck extends Vehicle implements ITitleComponent{
  constructor(model?: any) {
    super(model);
    if (model){
      this.vehicleCategoryId = model.vehicleCategoryId;
    }
  }

  vehicleCategoryId!:number;
  vehicleCategory: VehicleCategory | undefined;
  fuelConsumptionSummer!:number;
  fuelConsumptionWinter!: number;
  fuelTank!: number;
  certTahoExpDate?: Date;

  get Title(): string {
    return "Truck";
  }
}
