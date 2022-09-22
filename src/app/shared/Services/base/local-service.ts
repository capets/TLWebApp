import {IRepository} from "../../Interfaces/IRepository";
import {Service} from "./service";

export abstract class LocalService<T> extends Service{
  protected _model!: T;
  protected constructor(protected repository: IRepository<T, any>) {
    super();
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
  onUpdate(){
    this.repository.Update(this._model);
  }
  onAdd(): void {
    this.repository.Add(this._model);
  }
  Get(id: any): T | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }
  GetAll(): T[] {
    return this.repository.GetAll();
  }
}
