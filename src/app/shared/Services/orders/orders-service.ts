import {Injectable} from "@angular/core";
import {Order} from "../../Models/Order";
import {LocalService} from "../base/local-service";
import {OrdersRepositoryInMemory} from "../../Repositories/orders-repository-in-memory";

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends LocalService<Order>{
  constructor(private ordersRepositoryInMemory: OrdersRepositoryInMemory) {
    super(ordersRepositoryInMemory);
  }

  ngOnInit(): void {
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
