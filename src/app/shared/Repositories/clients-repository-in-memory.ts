import {IRepository} from "../Interfaces/IRepository";
import {Client} from "../Models/Client";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ClientsRepositoryInMemory implements IRepository<Client, number>{
  private readonly _clients: Client[];
  constructor() {
    this._clients = [
      new Client({
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
      }),
      new Client({
        id: 2,
        name: 'Moldtelecom SA',
        legalAddress: 'or.Chisinau, str. Stefan cel Mare 230',
        postalAddress: 'or.Chisinau, str. Stefan cel Mare 230',
        fiscalCode: '59345648465',
        Vat: '857456',
        Iban: 'MD2838842682090220',
        tel: '022222222',
        fax: '022222233',
        Ceo: 'Moldtelecom Victor',
      })
    ];
  }
  Add(item: Client): void {
    const id = this._clients.length > 0
      ? Math.max(...this._clients.map(x => x.id)) : 0;
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
