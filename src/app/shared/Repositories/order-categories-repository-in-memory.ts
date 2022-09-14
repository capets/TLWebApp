import {IRepository} from "../Interfaces/IRepository";
import {Injectable} from "@angular/core";
import {OrderCategory} from "../Models/OrderCategory";
import {CategoryBase} from "../Models/CategoryBase";

@Injectable({
  providedIn: 'root'
})
export class OrderCategoriesRepositoryInMemory implements IRepository<CategoryBase, number>{
  private readonly _orderCategories: OrderCategory[];
  constructor() {
    this._orderCategories = [];
    let category = new OrderCategory();
    category.id = 1;
    category.name = 'Import';
    this._orderCategories.push(category);

    category = new OrderCategory();
    category.id = 2;
    category.name = 'Export';
    this._orderCategories.push(category);

    category = new OrderCategory();
    category.id = 3;
    category.name = 'Tara Terta';
    this._orderCategories.push(category);
  }
  Add(item: OrderCategory): void {
    const id = this._orderCategories.length > 0
      ? Math.max(...this._orderCategories.map(x => x.id)) : 0;
    item.id = id + 1;
    this._orderCategories.push(item);
  }

  Get(id: number): OrderCategory | undefined {
    return this._orderCategories.find(x => x.id === id);
  }

  GetAll(): OrderCategory[] {
    return this._orderCategories;
  }

  Remove(item: OrderCategory): void {
    this._orderCategories.forEach((element,index)=>{
      if (element.id === item.id){
        this._orderCategories.splice(index, 1);
        return;
      }
    });
  }

  Update(item: OrderCategory): void {
    const old = this._orderCategories.find(x => x.id === item.id);
    if (old){
      const idx = this._orderCategories.indexOf(old);
      this._orderCategories[idx] = item;
    }
  }
}
