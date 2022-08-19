import { Component, OnInit } from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";
import {TrucksService} from "../shared/Services/trucks.service";
import {Truck} from "../shared/Models/Truck";

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit, ITitleComponent {
  trucks:Truck[];
  constructor(private trucksService: TrucksService) {
    this.trucks = trucksService.GetTrucks();
  }

  ngOnInit(): void {
  }

  getTitle(): string {
    return "Camioane";
  }

  onDeleteClick(item: Truck  ) {
    if(confirm("Are you sure to delete "+ item.brand)) {
      this.trucksService.Remove(item);
    }

  }
}
