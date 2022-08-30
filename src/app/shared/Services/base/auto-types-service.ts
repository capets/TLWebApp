import {Injectable} from "@angular/core";
import {Service} from "./Service";
import {AutoType} from "../../Models/AutoType";
import {AutoTypesRepositoryInMemory} from "../../Repositories/auto-types-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class AutoTypesService extends Service<AutoType>{
  constructor(private autoTypesRepository: AutoTypesRepositoryInMemory) {
    super(autoTypesRepository);
  }
  onSubmit(): void {
    if (this._model.id > 0){
      this.onUpdate();
    }
    else{
      this.onAdd();
    }
  }
  Get(id: number | undefined): AutoType | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): AutoType[] {
    return this.repository.GetAll();
  }


}
