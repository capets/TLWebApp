import {Injectable} from "@angular/core";
import {IRepository} from "../Interfaces/IRepository";
import {Order} from "../Models/Order";
import {RoutesRepositoryInMemory} from "./routes-repository-in-memory";
import {ClientsRepositoryInMemory} from "./clients-repository-in-memory";
import {ExportersService} from "../Services/clients/exporters-service";
import {RecipientsService} from "../Services/clients/recipients-service";

@Injectable({
  providedIn:'root'
})
export class OrdersRepositoryInMemory implements IRepository<Order, number>{
  private readonly _orders: Order[];
  constructor(private routeRepository: RoutesRepositoryInMemory,
              private clientRepository: ClientsRepositoryInMemory,
              private exporterRepository: ExportersService,
              private recipientRepository: RecipientsService) {
    this._orders = [];
    this.Add( new Order({
      id: 1,
      routeId: 1,
      orderNumber: '51-09.2022',
      orderDate: new Date(2022, 9,1),
      clientId: 1,
      exporterId: 1,
      recipientId: 2,
      categoryId: 2,
      loadingDate: new Date(2022, 9,2),
      loadingAddress: 'Chisinau, RM',
      unloadingAddress: 'Bucuresti, Romania',
      cargoType: 'Piese',
      cargoVolume: 23,
      cargoWeight: 3200,
      pallets: 6,
      mtl: 4,
      deliveryDate: new Date(2022, 9,12),
      price: 1200,
      currency: 'EUR',
      miniRoute: 'MD-RO',
      reference: 'Ref 2345'
    }));

    this.Add( new Order({
      id: 2,
      routeId: 2,
      orderNumber: '55-09.2022',
      orderDate: new Date(2022, 9,10),
      clientId: 2,
      exporterId: 2,
      recipientId: 1,
      categoryId: 1,
      loadingDate: new Date(2022, 9,2),
      loadingAddress: 'Bucuresti, Romania',
      unloadingAddress: 'Chisinau, RM',
      cargoType: 'Componente PC',
      cargoVolume: 10,
      cargoWeight: 520,
      pallets: 2,
      mtl: 4,
      deliveryDate: new Date(2022, 9,15),
      price: 850,
      currency: 'EUR',
      miniRoute: 'RO-MD',
      reference: ''
    }));
  }
  private setNavigationProperties(item?: Order){
      if(!item) return;
      item.route = this.routeRepository.Get(item.routeId);
      item.client = this.clientRepository.Get(item.clientId);
      item.exporter = this.exporterRepository.Get(item.exporterId);
      item.recipient = this.recipientRepository.Get(item.recipientId);
  }
  private setRouteValues(oldOrder:Order | undefined, newOrder:Order | undefined){
    if (oldOrder && oldOrder.route) {
      oldOrder.route.mtl -= oldOrder.mtl;
      oldOrder.route.volume -= oldOrder.cargoVolume;
      oldOrder.route.weight -= oldOrder.cargoWeight;
    }
    if (newOrder && newOrder.route){
      //weird, after incrementing, the mtl, volume and weight types changes to string
      newOrder.route.mtl += parseInt(newOrder.mtl.toString());
      newOrder.route.volume += parseInt(newOrder.cargoVolume.toString());
      newOrder.route.weight += parseInt(newOrder.cargoWeight.toString());
    }
  }

  Add(item: Order): Order {
    const id = this._orders.length > 0
      ? Math.max(...this._orders.map(x => x.id)) : 0;
    item.id = id + 1;
    this._orders.push(item);
    this.setNavigationProperties(item);
    this.setRouteValues(undefined, item);
    return item;
  }

  Get(id: number): Order | undefined {
    const order = this._orders.find(x => x.id === id);
    return order;
  }

  GetAll(): Order[] {
    this._orders.forEach(x => this.setNavigationProperties(x));
    return this._orders;
  }

  Remove(item: Order): void {
    this._orders.forEach((element,index)=>{
      if (element.id === item.id){
        this.setRouteValues(item, undefined);
        this._orders.splice(index, 1);
        return;
      }
    });
  }

  Update(item: Order): void {
    const old = this._orders.find(x => x.id === item.id);
    if (old){
      this.setNavigationProperties(item);
      this.setRouteValues(old, item);
      const idx = this._orders.indexOf(old);
      this._orders[idx] = item;
    }
  }
}
