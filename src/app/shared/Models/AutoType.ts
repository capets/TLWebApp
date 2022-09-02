import {CategoryBase} from "./CategoryBase";

export class AutoType extends CategoryBase{

constructor(model?: AutoType) {
  super();
  if (model){
    this.id = model.id;
    this.name = model.name;
  }
}
}
