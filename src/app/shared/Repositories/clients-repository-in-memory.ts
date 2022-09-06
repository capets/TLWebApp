import {IRepository} from "../Interfaces/IRepository";
import {Client} from "../Models/Client";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ClientsRepositoryInMemory implements IRepository<Client, number>{
  private readonly _clients: Client[];
  constructor() {
    this._clients = [];

    this._clients.push(new Client({
      id: 1,
      name: 'Franzeluta SA',
      legalAddress: 'or.Chisinau, str. Columna 23',
      postalAddress: 'or.Chisinau, str. Columna 23',
      fiscalCode: '54465648465',
      Vat: '545445',
      Iban: 'MD2838949322090220',
      tel: '022587458',
      fax: '022445566',
      Ceo: 'Franzeloi Anton',
    }))
  }
  Add(item: Client): void {
    const id = Math.max(...this._clients.map(x => x.id));
    item.id = id + 1;
    this._clients.push(item);
  }

  Get(id: number): Client | undefined {
    return this._clients.find(x => x.id === id);
  }

  GetAll(): Client[] {
    return this._clients;
  }

  Remove(item: Client): void {
    this._clients.forEach((element,index)=>{
      if (element.id === item.id){
        this._clients.splice(index, 1);
        return;
      }
    });
  }

  Update(item: Client): void {
    const old = this._clients.find(x => x.id === item.id);
    if (old){
      const idx = this._clients.indexOf(old);
      this._clients[idx] = item;
    }
  }

}
