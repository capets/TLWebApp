import {Injectable} from "@angular/core";
import {Service} from "./service";
import {Status} from "../../Models/Status";
import {StatusRepositoryInMemory} from "../../Repositories/status-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class StatusesServices extends Service<Status>{
  constructor(private statusRepositoryInMemory: StatusRepositoryInMemory) {
    super(statusRepositoryInMemory);
  }
  onSubmit(): void {
    if (this._model.id > 0){
      this.onUpdate();
    }
    else{
      this.onAdd();
    }
  }
  Get(id: number | undefined): Status | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): Status[] {
    return this.repository.GetAll();
  }
}
