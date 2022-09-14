import {Injectable} from "@angular/core";
import {Order} from "../../Models/Order";
import {Service} from "../base/service";
import {OrdersRepositoryInMemory} from "../../Repositories/orders-repository-in-memory";

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends Service<Order>{
  constructor(private ordersRepositoryInMemory: OrdersRepositoryInMemory) {
    super(ordersRepositoryInMemory);
  }

  ngOnInit(): void {
  }

  Get(id: number | undefined): Order | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): Order[] {
    return this.repository.GetAll();
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
