import {Injectable} from "@angular/core";
import {LocalService} from "../base/local-service";
import {TrailCategory} from "../../Models/TrailCategory";
import {TrailCategoriesRepositoryInMemory} from "../../Repositories/trail-categories-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class TrailCategoriesService extends LocalService<TrailCategory>{
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


}
