import {Injectable} from "@angular/core";
import {Service} from "../base/Service";
import {TrailCategory} from "../../Models/TrailCategory";
import {TrailCategoriesRepositoryInMemory} from "../../Repositories/trail-categories-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class TrailCategoriesService extends Service<TrailCategory>{
  constructor(private trailCategoryRepository: TrailCategoriesRepositoryInMemory) {
    super(trailCategoryRepository);
  }

  onSubmit(): void {
    if (this._model.id > 0){
      this.onUpdate();
    }
    else{
      this.onAdd();
    }
  }

  Get(id: number | undefined): TrailCategory | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): TrailCategory[] {
    return this.repository.GetAll();
  }
}
