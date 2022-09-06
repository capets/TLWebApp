import {Injectable} from "@angular/core";
import {TrucksService} from "../trucks/trucks.service";
import {TrailsService} from "../trails/trails.service";
import {DriversService} from "../drivers/drivers.service";
import {Expiration} from "../../Models/Expiration";
import {ExpirationsHelper} from "../../Helpers/expirations-helper";

@Injectable({
  providedIn: 'root'
})
export class ExpirationCheckService {
  output!: Map<string, Expiration[]>;

  constructor(private trucksService: TrucksService,
              private trailsService: TrailsService,
              private driversService: DriversService) {
  }

  get expirations(): Map<string, Expiration[]> {
    this.output = new Map();
    this.setExpirations('Camioane', this.trucksService);
    this.setExpirations('Remorci', this.trailsService);
    this.setExpirations('Soferi', this.driversService);
    return this.output;
  }

  private setExpirations(groupName: string, service: any) {
    let expiration: Expiration[];

    for (const item of service.GetAll()) {
      expiration = [];
      if (ExpirationsHelper.expirationProperties().has(item.constructor.name)) {
        for (const prop of ExpirationsHelper.expirationProperties().get(item.constructor.name)?.keys() ?? []) {
          // @ts-ignore
          if (this.isExpired(item[prop])) {
            expiration.push(new Expiration({
              name: ExpirationsHelper.expirationProperties().get(item.constructor.name)?.get(prop),
              // @ts-ignore
              values: item[prop]
            }));
          }
        }
        if (expiration.length > 0) {
          if(this.output.has(groupName) == false){
            this.output.set(groupName, []);
          }
          this.output.get(groupName)?.push(
            new Expiration({
              name: item.name,
              values: expiration
            })
          );
        }
      }
    }
  }

  private isExpired(value: Date): boolean {
    return value <= new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay())
  }
}
