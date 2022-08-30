import {IEditService} from "../../Interfaces/IEditService";
import {IRepository} from "../../Interfaces/IRepository";

export abstract class Service<T> implements IEditService{
  protected _model!: T;
  constructor(protected repository: IRepository<T, any>) {
  }

  get activeModel(): T {
    return this._model;
  }

  set activeModel(model: T) {
    this._model = model;
  }

  onDelete(): void {
    this.repository.Remove(this._model);
  }

  abstract onSubmit(): void;

  onUpdate(){
    this.repository.Update(this._model);
  }

  onAdd(): void {
    this.repository.Add(this._model);
  }
}
