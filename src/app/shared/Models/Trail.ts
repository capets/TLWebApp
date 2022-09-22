import {Vehicle} from "./Vehicle";
import {TrailCategory} from "./TrailCategory";
import {ITitleComponent} from "../Interfaces/ITitleComponent";

export class Trail extends Vehicle implements ITitleComponent{
  constructor(model?:any) {
    super(model);
    if (model){
      this.trailCategoryId = model.trailCategoryId;
    }
  }

  trailCategoryId!: number;
  trailCategory!: TrailCategory | undefined;

  get Title(): string {
    return "Trail";
  }
}
