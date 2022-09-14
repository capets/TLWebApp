import {Injectable, Injector} from "@angular/core";
import {IRepository} from "../Interfaces/IRepository";
import {Route} from "../Models/Route";
import {TrucksRepositoryInMemory} from "./trucks-repository-in-memory";
import {TrailsRepositoryInMemory} from "./trails-repository-in-memory";
import {DriversRepositoryInMemory} from "./drivers-repository-in-memory";
import {StatusRepositoryInMemory} from "./status-repository-in-memory";
import {OrdersRepositoryInMemory} from "./orders-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class RoutesRepositoryInMemory implements IRepository<Route, number>{
  private readonly _routes: Route[];

  constructor(private trucksRepository: TrucksRepositoryInMemory,
              private trailRepository: TrailsRepositoryInMemory,
              private driversRepository: DriversRepositoryInMemory,
              private statusRepository: StatusRepositoryInMemory) {
    this._routes = [
      new Route({
      id: 1,
      wayBill: 'DAA 21744973',
      openDate: new Date(2022, 9,1),
      closeDate: null,
      truckId: 1,
      trailId: 1,
      driverId: 1,
      driverId2: 2,
      statusId: 1,
      details: 'Fara detalii...',
      mtl:0,
      volume:0,
      weight: 0
    }),
      new Route({
        id: 2,
        wayBill: 'DAA 21750973',
        openDate: new Date(2022, 8,19),
        closeDate: new Date(2022, 8,30),
        truckId:2,
        trailId: 2,
        driverId: 2,
        driverId2: 0,
        statusId: 2,
        details: 'Certificat expirat.',
        mtl:0,
        volume:0,
        weight: 0
      }),
      new Route({
        id: 3,
        wayBill: 'DAA 21745003',
        openDate: new Date(2022, 9,7),
        closeDate: null,
        truckId: 3,
        trailId: 3,
        driverId: 1,
        driverId2: 0,
        statusId: 1,
        details: '',
        mtl:0,
        volume:0,
        weight: 0
      })
    ];
  }
  private setNavigationProperties(item?: Route){
      if(!item) return;

      item.truck = this.trucksRepository.Get(item.truckId);
      item.trail = this.trailRepository.Get(item.trailId);
      item.driver = this.driversRepository.Get(item.driverId);
      item.driver2 = this.driversRepository.Get(item.driverId2);
      item.status = this.statusRepository.Get(item.statusId)?.name;
  }
  Add(item: Route): Route {
    const id = this._routes.length > 0
      ? Math.max(...this._routes.map(x => x.id)) : 0;
    item.id = id + 1;
    this.setNavigationProperties(item);
    this._routes.push(item);
    return item;
  }

  Get(id: number): Route | undefined {
    const rt = this._routes.find(x => x.id === id);
    return rt;
  }

  GetAll(): Route[] {
    this._routes.forEach(x => this.setNavigationProperties(x));
    return this._routes;
  }

  Remove(item: Route): void {
    this._routes.forEach((element,index)=>{
      if (element.id === item.id){
        this._routes.splice(index, 1);
        return;
      }
    });
  }

  Update(item: Route): void {
    const old = this._routes.find(x => x.id === item.id);
    if (old){
      this.setNavigationProperties(item);
      const idx = this._routes.indexOf(old);
      this._routes[idx] = item;
    }
  }
}
