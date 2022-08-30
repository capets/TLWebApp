import {Component, OnInit, TemplateRef} from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";
import {TrucksService} from "../shared/Services/trucks/trucks.service";
import {Truck} from "../shared/Models/Truck";
import {ColorByDate} from "../shared/Helpers/ColorByDate";
import {TruckEditorServiceComponent} from "../shared/Services/trucks/truck-editor-service-component";
import {DeleteModalService} from "../shared/Services/base/delete-modal-service";
import {TruckDeleteService} from "../shared/Services/trucks/truck-delete-service";

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit, ITitleComponent {
  trucks:Truck[] = [];
  dialogTitle: any;
  selectedTruckId: number = 0;

  constructor(public trucksService: TrucksService,
              private truckEditService: TruckEditorServiceComponent,
              private deleteService: TruckDeleteService) {
  }

  ngOnInit(): void {
    this.trucks = this.trucksService.GetAll();
  }

  get Title(): string {
    return "Camioane";
  }

  onDeleteClick(item: Truck ) {
    this.dialogTitle = 'Eliminare camion';
    this.trucksService.activeModel = item;
    this.deleteService.delete('Eliminare Remorca', `Esti sigur ca doresti sa elimini remorca ${item.plateNumber}?`);
  }

  onEditClick(item:Truck) {
    this.selectedTruckId = item.id;
    this.dialogTitle = 'Editare camion';
    this.trucksService.activeModel = Object.assign(new Truck(), item);
    this.truckEditService.edit().subscribe(x => this.selectedTruckId = 0);
  }

  getCellColor(date:any){
    return ColorByDate.getForTable(date);
  }

  onAddClick() {
    this.dialogTitle = 'Adauga camion';
    this.trucksService.activeModel = new Truck();
    this.truckEditService.edit();
  }
}
