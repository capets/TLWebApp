import {Injectable} from "@angular/core";
import {Client} from "../../Models/Client";
import {ClientsRepositoryInMemory} from "../../Repositories/clients-repository-in-memory";
import {ClientsService} from "./clients-service";

@Injectable({
  providedIn: 'root'
})
export class ExportersService extends ClientsService{
constructor(private exporterRepository: ClientsRepositoryInMemory) {
  super(exporterRepository);
}
  override GetAll(): Client[] {
    return this.repository.GetAll().filter(x => x.isExporter);
  }
}
