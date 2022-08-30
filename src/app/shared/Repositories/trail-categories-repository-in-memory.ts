import {IRepository} from "../Interfaces/IRepository";
import {Injectable} from "@angular/core";
import {TrailCategory} from "../Models/TrailCategory";

@Injectable({
  providedIn: 'root'
})
export class TrailCategoriesRepositoryInMemory implements IRepository<TrailCategory, number>{
  private readonly _trailCategories: TrailCategory[];
  constructor() {
    this._trailCategories = [];
    let category = new TrailCategory();
    category.id = 1;
    category.name = 'Remorca';
    this._trailCategories.push(category);

    category = new TrailCategory();
    category.id = 2;
    category.name = 'Semiremorca';
    this._trailCategories.push(category);
  }
  Add(item: TrailCategory): void {
    const id = Math.max(...this._trailCategories.map(x => x.id));
    item.id = id + 1;
    this._trailCategories.push(item);
  }

  Get(id: number): TrailCategory | undefined {
    return this._trailCategories.find(x => x.id === id);
  }

  GetAll(): TrailCategory[] {
    return this._trailCategories;
  }

  Remove(item: TrailCategory): void {
    this._trailCategories.forEach((element,index)=>{
      if (element.id === item.id){
        this._trailCategories.splice(index, 1);
        return;
      }
    });
  }

  Update(item: TrailCategory): void {
    const old = this._trailCategories.find(x => x.id === item.id);
    if (old){
      const idx = this._trailCategories.indexOf(old);
      this._trailCategories[idx] = item;
    }
  }
}
