import {Injectable} from "@angular/core";
import {LocalService} from "./local-service";
import {Status} from "../../Models/Status";
import {StatusRepositoryInMemory} from "../../Repositories/status-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class StatusesServices extends LocalService<Status>{
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
}
