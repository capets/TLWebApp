import {AutoType} from "./AutoType";

export class Vehicle{
  id: number;
  autoTypeId:number;
  brand?: string;
  plateNumber?: string;
  vin?: string;
  length: number;
  height: number;
  width: number;
  loadCapacity:number;
  itpExpDate?: Date;
  certCemtExpDate?: Date;
  certRcaExpDate?: Date;
  certAgrExpDate?: Date;
  certCVerdeExpDate?: Date;
  certCascoExpDate?: Date;
  certStingExpDate?: Date;
  constructor() {
    this.id = 0;
    this.autoTypeId = 0;
    this.length = 0;
    this.height = 0;
    this.width = 0;
    this.loadCapacity = 0;
  }

  get volume(){
    return this.height * this.width * this.length;
  }
}
