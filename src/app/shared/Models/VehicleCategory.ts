import {CategoryBase} from "./CategoryBase";

export class VehicleCategory extends CategoryBase{
constructor(model?: VehicleCategory) {
  super();
  if (model){
    this.id = model.id;
    this.name = model.name;
  }
}
}
