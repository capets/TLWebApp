import {Injectable} from "@angular/core";
import {VehicleCategory} from "../../Models/VehicleCategory";
import {HttpClient} from "@angular/common/http";
import {RemoteService} from "../base/remote-service";

@Injectable({
  providedIn:'root'
})
export class VehicleCategoriesService extends RemoteService<VehicleCategory>{
  constructor(private http: HttpClient) {
    super(VehicleCategory, 'VehicleCategories', http);
  }

  override onSubmit(): void {
    if (this._model.id > 0){
      this.onUpdate();
    }
    else{
      this.onAdd();
    }
  }
}
