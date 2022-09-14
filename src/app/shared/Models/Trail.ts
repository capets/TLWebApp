import {Vehicle} from "./Vehicle";
import {TrailCategory} from "./TrailCategory";

export class Trail extends Vehicle{
  constructor(model?:any) {
    super(model);
    if (model){
      this._trailCategoryId = model.trailCategoryId;
    }
  }

  get trailCategory(): TrailCategory | undefined {
    return this._trailCategory;
  }
  set trailCategory(value: TrailCategory | undefined) {
    this._trailCategory = value;
  }

  get trailCategoryId(): number {
    return this._trailCategoryId;
  }
  set trailCategoryId(value: number) {
    this._trailCategoryId = value;
  }

  private _trailCategoryId!: number;
  private _trailCategory!: TrailCategory | undefined;
}
