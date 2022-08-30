import {Injectable} from "@angular/core";
import {IRepository} from "../Interfaces/IRepository";
import {AutoType} from "../Models/AutoType";

@Injectable({
  providedIn:'root'
})
export class AutoTypesRepositoryInMemory implements IRepository<AutoType, number>{
  private readonly _autoTypes:AutoType[];
  constructor() {
    this._autoTypes = [];

    let autoType = new AutoType();
    autoType.id = 1;
    autoType.name = 'Prelata';
    this._autoTypes.push(autoType);

    autoType = new AutoType();
    autoType.id = 2;
    autoType.name = 'Frigider';
    this._autoTypes.push(autoType);

    autoType = new AutoType();
    autoType.id = 3;
    autoType.name = 'Duba';
    this._autoTypes.push(autoType);

    autoType = new AutoType();
    autoType.id = 4;
    autoType.name = 'Container';
    this._autoTypes.push(autoType);
  }
  Add(item: AutoType): void {
    const id = Math.max(...this._autoTypes.map(x => x.id));
    item.id = id + 1;
    this._autoTypes.push(item);
  }

  Get(id: number): AutoType | undefined {
    return this._autoTypes.find(x => x.id === id);
  }

  GetAll(): AutoType[] {
    return this._autoTypes;
  }

  Remove(item: AutoType): void {
    this._autoTypes.forEach((element,index)=>{
      if (element.id === item.id){
        this._autoTypes.splice(index, 1);
        return;
      }
    });
  }

  Update(item: AutoType): void {
    const old = this._autoTypes.find(x => x.id === item.id);
    if (old){
      const idx = this._autoTypes.indexOf(old);
      this._autoTypes[idx] = item;
    }
  }
}
