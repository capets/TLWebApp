import {Injectable, OnInit} from "@angular/core";
import {Service} from "../base/service";
import {Route} from "../../Models/Route";
import {RoutesRepositoryInMemory} from "../../Repositories/routes-repository-in-memory";


@Injectable({
  providedIn: 'root'
})
export class RoutesService extends Service<Route> implements OnInit{
  constructor(private routeRepository: RoutesRepositoryInMemory) {
    super(routeRepository);
  }

  ngOnInit(): void {
  }

  Get(id: number | undefined): Route | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): Route[] {
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
