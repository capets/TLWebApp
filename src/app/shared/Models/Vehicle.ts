import {AutoType} from "./AutoType";

export class Vehicle{
  id!: number;
  autoTypeId!:number;
  brand?: string;
  plateNumber?: string;
  vin?: string;
  length: number = 0;
  height: number = 0;
  width: number = 0;
  loadCapacity!:number;
  itpExpDate?: Date;
  certCemtExpDate?: Date;
  certRcaExpDate?: Date;
  certAgrExpDate?: Date;
  certCVerdeExpDate?: Date;
  certCascoExpDate?: Date;
  certStingExpDate?: Date;
  autoType?: AutoType;
  constructor(model?: any) {
    if (model){
      this.id = model.id;
      this.autoTypeId = model.autoTypeId;
      this.brand = model.brand;
      this.plateNumber = model.plateNumber;
      this.vin = model.vin;
      this.length = model.length;
      this.height = model.height;
      this.width = model.width;
      this.loadCapacity = model.loadCapacity;
      this.itpExpDate = model.itpExpDate;
      this.certRcaExpDate = model.certRcaExpDate;
      this.certAgrExpDate = model.certAgrExpDate;
      this.certCVerdeExpDate = model.certCVerdeExpDate;
      this.certCascoExpDate = model.certCascoExpDate;
      this.certStingExpDate = model.certStingExpDate;
    }
  }

  get volume(){
    return this.height * this.width * this.length;
  }
  get name():string|undefined{
    return this.plateNumber;
  }
}
