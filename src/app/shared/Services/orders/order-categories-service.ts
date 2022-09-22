import {Injectable} from "@angular/core";
import {LocalService} from "../base/local-service";
import {CategoryBase} from "../../Models/CategoryBase";
import {OrderCategory} from "../../Models/OrderCategory";
import {OrderCategoriesRepositoryInMemory} from "../../Repositories/order-categories-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class OrderCategoriesService extends LocalService<CategoryBase>{
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


}
