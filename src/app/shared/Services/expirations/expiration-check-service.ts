import {EventEmitter, Injectable} from "@angular/core";
import {TrucksService} from "../trucks/trucks.service";
import {TrailsService} from "../trails/trails.service";
import {DriversService} from "../drivers/drivers.service";
import {Expiration} from "../../Models/Expiration";
import {ExpirationsHelper} from "../../Helpers/expirations-helper";
import {Observable, of} from "rxjs";
import {RemoteService} from "../base/remote-service";

@Injectable({
  providedIn: 'root'
})
export class ExpirationCheckService {
  private _output!: Map<string, Expiration[]>;
  loading: EventEmitter<boolean>;

  constructor(private trucksService: TrucksService,
              private trailsService: TrailsService,
              private driversService: DriversService) {
    this.loading = new EventEmitter<boolean>();
  }

  get expirations(): Map<string, Expiration[]> {
    this._output = new Map();

    this.setExpirations('Camioane', this.trucksService);
    this.setExpirations('Remorci', this.trailsService);
    this.setExpirations('Soferi', this.driversService);
    return this._output;
  }

  private setExpirations(groupName: string, service: RemoteService<any>) {
    let expiration: Expiration[];
    this.loading.emit(true);
    service.GetAll().subscribe(items => {

      for (const item of items){
        expiration = [];
        if (ExpirationsHelper.expirationProperties().has(item.Title)) {
          for (const prop of ExpirationsHelper.expirationProperties().get(item.Title)?.keys() ?? []) {
            if (this.isExpired(item[prop])) {
              expiration.push(new Expiration({
                name: ExpirationsHelper.expirationProperties().get(item.Title)?.get(prop),
                values: item[prop]
              }));
            }
          }
          if (expiration.length > 0) {
            if(this._output.has(groupName) == false){
              this._output.set(groupName, []);
            }
            this._output.get(groupName)?.push(
              new Expiration({
                name: item.name,
                values: expiration
              })
            );
          }
        }
      }
      this.loading.emit(false);
    });
  }

  private isExpired(value: Date): boolean {
    return value && value <= new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay())
  }
}
