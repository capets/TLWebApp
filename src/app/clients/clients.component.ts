import { Component, OnInit } from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";
import {ColorByDate} from "../shared/Helpers/color-by-date";
import {Client} from "../shared/Models/Client";
import {ClientService} from "../shared/Services/clients/client-service";
import {ClientEditServiceComponent} from "../shared/Services/clients/client-edit-service.component";
import {ClientDeleteService} from "../shared/Services/clients/client-delete-service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, ITitleComponent {

  clients:Client[] = [];
  dialogTitle: any;
  selectedClientId: number = 0;
  constructor( public clientsService: ClientService,
               private clientEditService: ClientEditServiceComponent,
               private clientDelete: ClientDeleteService) {
  }
  ngOnInit(): void {
    this.clients = this.clientsService.GetAll();
  }

  get Title(): string {
    return "Clienti";
  }

  onDeleteClick(item: Client ) {
    this.dialogTitle = 'Eliminare client';
    this.clientsService.activeModel = item;
    this.clientDelete.delete('Eliminare Client', `Esti sigur ca doresti sa elimini clientul ${item.name}?`);
  }

  onEditClick(item: Client) {
    this.selectedClientId = item.id;
    this.dialogTitle = 'Editare client';
    this.clientsService.activeModel = Object.assign(new Client(), item);
    this.clientEditService.edit().subscribe(x => this.selectedClientId = 0);
  }

  getCellColor(date:any){
    return ColorByDate.getForTable(date);
  }

  onAddClick() {
    this.dialogTitle = 'Adauga client';
    this.clientsService.activeModel = new Client();
    this.clientEditService.edit();
  }

}
