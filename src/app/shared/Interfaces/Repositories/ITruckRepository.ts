import {Truck} from "../../Models/Truck";

export interface ITruckRepository{
  Add(vehicle: Truck) : void;
  GetTruck(id:number):Truck | undefined;
  GetTrucks():Truck[];
  Remove(id:number):void;
  Remove(truck:Truck):void;
  Update(truck:Truck):void;
}
