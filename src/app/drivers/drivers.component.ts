import { Component, OnInit } from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";
import {DriversService} from "../shared/Services/drivers/drivers.service";
import {DriverDeleteService} from "../shared/Services/drivers/driver-delete-service";
import {DriverEditServiceComponent} from "../shared/Services/drivers/driver-edit-service.component";
import {ColorByDate} from "../shared/Helpers/color-by-date";
import {Driver} from "../shared/Models/Driver";

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit, ITitleComponent {
  drivers:Driver[] = [];
  selectedDriverId: number = 0;
 constructor( public driversService: DriversService,
              private driverEditService: DriverEditServiceComponent,
              private deleteService: DriverDeleteService) {
 }
  ngOnInit(): void {
   this.drivers = this.driversService.GetAll();
  }

  get Title(): string {
    return "Soferi";
  }

  onDeleteClick(item: Driver ) {
    this.driversService.activeModel = item;
    this.deleteService.delete('Eliminare Sofer', `Esti sigur ca doresti sa elimini soferul ${item.fullName}?`);
  }

  onEditClick(item:Driver) {
    this.selectedDriverId = item.id;
    this.driversService.activeModel = Object.assign(new Driver(), item);
    this.driverEditService.edit().subscribe(x => this.selectedDriverId = 0);
  }

  getCellColor(date:any){
    return ColorByDate.getForTable(date);
  }

  onAddClick() {
    this.driversService.activeModel = new Driver();
    this.driverEditService.edit();
  }

}
