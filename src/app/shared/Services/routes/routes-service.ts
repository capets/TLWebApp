import {Injectable, OnInit} from "@angular/core";
import {LocalService} from "../base/local-service";
import {Route} from "../../Models/Route";
import {RoutesRepositoryInMemory} from "../../Repositories/routes-repository-in-memory";


@Injectable({
  providedIn: 'root'
})
export class RoutesService extends LocalService<Route> implements OnInit{
  constructor(private routeRepository: RoutesRepositoryInMemory) {
    super(routeRepository);
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
