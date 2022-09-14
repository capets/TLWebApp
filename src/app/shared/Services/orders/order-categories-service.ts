import {Injectable} from "@angular/core";
import {Service} from "../base/service";
import {CategoryBase} from "../../Models/CategoryBase";
import {OrderCategory} from "../../Models/OrderCategory";
import {OrderCategoriesRepositoryInMemory} from "../../Repositories/order-categories-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class OrderCategoriesService extends Service<CategoryBase>{
  constructor(private orderCategoriesRepositoryInMemory: OrderCategoriesRepositoryInMemory) {
    super(orderCategoriesRepositoryInMemory);
  }

  onSubmit(): void {
    if (this._model.id > 0){
      this.onUpdate();
    }
    else{
      this.onAdd();
    }
  }

  Get(id: number | undefined): OrderCategory | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): OrderCategory[] {
    return this.repository.GetAll();
  }
}
