import {Injectable} from "@angular/core";
import {IRepository} from "../Interfaces/IRepository";
import {Status} from "../Models/Status";

@Injectable({
  providedIn:'root'
})
export class StatusRepositoryInMemory implements IRepository<Status, number>{
  private readonly _statuses: Status[];
  constructor() {
    this._statuses = [];
    this._statuses.push(new Status({
      id: 1,
      name: 'Deschis'
    }));
    this._statuses.push(new Status({
      id: 2,
      name: 'Inchis'
    }));
  }
  Add(item: Status): void {
    const id = this._statuses.length > 0
      ? Math.max(...this._statuses.map(x => x.id)) : 0;
    item.id = id + 1;
    this._statuses.push(item);
  }

  Get(id: number): Status | undefined {
    return this._statuses.find(x => x.id === id);
  }

  GetAll(): Status[] {
    return this._statuses;
  }

  Remove(item: Status): void {
    this._statuses.forEach((element,index)=>{
      if (element.id === item.id){
        this._statuses.splice(index, 1);
        return;
      }
    });
  }

  Update(item: Status): void {
    const old = this._statuses.find(x => x.id === item.id);
    if (old){
      const idx = this._statuses.indexOf(old);
      this._statuses[idx] = item;
    }
  }
}
