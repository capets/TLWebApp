import {Injectable} from "@angular/core";
import {VehicleCategoriesRepositoryInMemory} from "../../Repositories/vehicle-categories-repository-in-memory";
import {Service} from "../base/Service";
import {VehicleCategory} from "../../Models/VehicleCategory";

@Injectable({
  providedIn:'root'
})
export class VehicleCategoriesService extends Service<VehicleCategory>{
  constructor(private vehicleCategoryRepository: VehicleCategoriesRepositoryInMemory ) {
    super(vehicleCategoryRepository);
  }

  onSubmit(): void {
    if (this._model.id > 0){
      this.onUpdate();
    }
    else{
      this.onAdd();
    }
  }

  Get(id: number | undefined): VehicleCategory | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): VehicleCategory[] {
    return this.repository.GetAll();
  }

}
