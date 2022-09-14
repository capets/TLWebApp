import {Injectable} from "@angular/core";
import {Service} from "../base/service";
import {Client} from "../../Models/Client";
import {ClientsRepositoryInMemory} from "../../Repositories/clients-repository-in-memory";

@Injectable({
  providedIn: 'root'
})
export class ClientsService extends Service<Client>{
constructor(private clientRepository: ClientsRepositoryInMemory) {
  super(clientRepository);
}
  Get(id: number | undefined): Client | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }
  GetAll(): Client[] {
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
