import {Injectable} from "@angular/core";
import {LocalService} from "../base/local-service";
import {Client} from "../../Models/Client";
import {ClientsRepositoryInMemory} from "../../Repositories/clients-repository-in-memory";

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends LocalService<Client>{
constructor(private clientRepository: ClientsRepositoryInMemory) {
  super(clientRepository);
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
