import {CategoryBase} from "./CategoryBase";

export class TrailCategory extends CategoryBase{
constructor(model?: TrailCategory) {
  super();
  if (model){
    this.id = model.id;
    this.name = model.name;
  }
}
}
