import {Component, OnInit} from '@angular/core';
import {ITitleComponent} from "../shared/Interfaces/ITitleComponent";
import {ColorByDate} from "../shared/Helpers/color-by-date";
import {TrailsService} from "../shared/Services/trails/trails.service";
import {Trail} from "../shared/Models/Trail";
import {TrailEditorServiceComponent} from "../shared/Services/trails/trail-editor-service-component";
import {TrailDeleteService} from "../shared/Services/trails/trail-delete-service";

@Component({
  selector: 'app-trails',
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.scss']
})
export class TrailsComponent implements OnInit, ITitleComponent {
  trails: Trail[] = [];
  selectedTrailId: number = 0;
  constructor(private trailsService: TrailsService,
              private trailEditService: TrailEditorServiceComponent,
              private deleteService: TrailDeleteService) {
  }

  ngOnInit(): void {
    this.refreshTrails();
    this.trailsService.onChange
      .subscribe(x => this.refreshTrails());
  }
  private refreshTrails():void{
    this.trailsService.GetAll()
      .subscribe(x => {
        this.trails = x;
      });
  }

  get Title(): string {
    return "Remorci";
  }

  onDeleteClick(item: Trail ) {
    this.trailsService.activeModel = item;
    this.deleteService.delete('Eliminare Remorca', `Esti sigur ca doresti sa elimini remorca ${item.plateNumber}?`);
  }

  onEditClick(item:Trail) {
    this.selectedTrailId = item.id;
    this.trailsService.activeModel = Object.assign(new Trail(), item);
    this.trailEditService.edit().subscribe(x => this.selectedTrailId = 0);
  }

  getCellColor(date:any){
    return ColorByDate.getForTable(date);
  }

  onAddClick() {
    this.trailsService.activeModel = new Trail();
    this.trailEditService.edit();
  }
}
