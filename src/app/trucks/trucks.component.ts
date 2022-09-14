import {Component, OnInit, TemplateRef} from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";
import {TrucksService} from "../shared/Services/trucks/trucks.service";
import {Truck} from "../shared/Models/Truck";
import {ColorByDate} from "../shared/Helpers/color-by-date";
import {TruckEditorServiceComponent} from "../shared/Services/trucks/truck-editor-service-component";
import {TruckDeleteService} from "../shared/Services/trucks/truck-delete-service";

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit, ITitleComponent {
  trucks:Truck[] = [];
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
    this.trucksService.activeModel = item;
    this.deleteService.delete('Eliminare Remorca', `Esti sigur ca doresti sa elimini remorca ${item.plateNumber}?`);
  }

  onEditClick(item:Truck) {
    this.selectedTruckId = item.id;
    this.trucksService.activeModel = Object.assign(new Truck(), item);
    this.truckEditService.edit().subscribe(x => this.selectedTruckId = 0);
  }

  getCellColor(date:any){
    return ColorByDate.getForTable(date);
  }

  onAddClick() {
    this.trucksService.activeModel = new Truck();
    this.truckEditService.edit();
  }
}
