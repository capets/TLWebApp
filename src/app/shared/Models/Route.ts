import {Truck} from "./Truck";
import {Trail} from "./Trail";
import {Driver} from "./Driver";

export class Route{
  get weight(): number {
    return this._weight;
  }
  set weight(value: number) {
    this._weight = value;
  }

  get volume(): number {
    return this._volume;
  }
  set volume(value: number) {
    this._volume = value;
  }

  get mtl(): number {
    return this._mtl;
  }
  set mtl(value: number) {
    this._mtl = value;
  }

  id!:number;
  wayBill!:string
  openDate!:Date;
  closeDate!:Date;
  truckId!:number;
  trailId!:number;
  driverId!:number;
  driverId2!:number;
  statusId!:number;
  details!:string;
  truck?:Truck;
  trail?:Trail;
  driver?:Driver;
  driver2?:Driver;
  status?:string;
  private _mtl: number = 0;
  private _volume: number = 0;
  private _weight: number = 0;

  constructor(model?:any) {
    if (model){
      this.id = model.id;
      this.wayBill = model.wayBill;
      this.openDate = model.openDate;
      this.closeDate = model.closeDate;
      this.truckId = model.truckId;
      this.trailId = model.trailId;
      this.driverId = model.driverId;
      this.driverId2 = model.driverId2;
      this.statusId = model.statusId;
      this.details = model.details;
      this.truck = model.truck;
      this.trail = model.trail;
      this.driver = model.driver;
      this.driver2 = model.driver2;
      this.status = model.status;
      this._mtl = model.mtl;
      this._volume = model.volume;
      this._weight = model.weight;
    }
  }
}
