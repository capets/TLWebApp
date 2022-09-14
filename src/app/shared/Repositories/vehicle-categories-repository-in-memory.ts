import {IRepository} from "../Interfaces/IRepository";
import {VehicleCategory} from "../Models/VehicleCategory";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class VehicleCategoriesRepositoryInMemory implements IRepository<VehicleCategory, number>{
  private readonly _vehicleCategories: VehicleCategory[];
  constructor() {
    this._vehicleCategories = [];
    let category = new VehicleCategory();
    category.id = 1;
    category.name = 'Camion';
    this._vehicleCategories.push(category);

    category = new VehicleCategory();
    category.id = 2;
    category.name = 'Cap tractor';
    this._vehicleCategories.push(category);
  }
  Add(item: VehicleCategory): void {
    const id = this._vehicleCategories.length > 0
      ? Math.max(...this._vehicleCategories.map(x => x.id)) : 0;
    item.id = id + 1;
    this._vehicleCategories.push(item);
  }

  Get(id: number): VehicleCategory | undefined {
    return this._vehicleCategories.find(x => x.id === id);
  }

  GetAll(): VehicleCategory[] {
    return this._vehicleCategories;
  }

  Remove(item: VehicleCategory): void {
    this._vehicleCategories.forEach((element,index)=>{
      if (element.id === item.id){
        this._vehicleCategories.splice(index, 1);
        return;
      }
    });
  }

  Update(item: VehicleCategory): void {
    const old = this._vehicleCategories.find(x => x.id === item.id);
    if (old){
      const idx = this._vehicleCategories.indexOf(old);
      this._vehicleCategories[idx] = item;
    }
  }
}
