import {Injectable} from "@angular/core";
import {IRepository} from "../Interfaces/IRepository";
import {Driver} from "../Models/Driver";

@Injectable({
  providedIn: 'root'
})
export class DriversRepositoryInMemory implements IRepository<Driver, number>{
  private readonly _drivers:Driver[];
  constructor() {
    this._drivers = [];

    this._drivers.push(new Driver(
      {
        id: 1,
        firstName: 'Caldare',
        lastName: 'Ion',
        nationalId: '123636355584259',
        birthDate: new Date(1982,5,11),
        licExpDate: new Date(2027, 10, 10),
        tahoExpDate: new Date(2023, 8, 25),
        medExpDate: new Date(2023, 11, 22),
        nationalExpDate: new Date(2028, 10, 30),
        passportExpDate: new Date(2025, 12, 29),
      }
    ));
    this._drivers.push(new Driver(
      {
        id: 2,
        firstName: 'Ciobanu',
        lastName: 'Mihai',
        nationalId: '1255588484844259',
        birthDate: new Date(1990,7,15),
        licExpDate: new Date(2035, 10, 10),
        tahoExpDate: new Date(2023, 4, 25),
        medExpDate: new Date(2023, 9, 22),
        nationalExpDate: new Date(2028, 10, 30),
        passportExpDate: new Date(2025, 12, 29),
      }
    ));
  }
  Add(item: Driver): void {
    const id = Math.max(...this._drivers.map(x => x.id));
    item.id = id + 1;
    this._drivers.push(item);
  }

  Get(id: number): Driver | undefined {
    return this._drivers.find(x => x.id === id);
  }

  GetAll(): Driver[] {
    return this._drivers;
  }

  Remove(item: Driver): void {
    this._drivers.forEach((element,index)=>{
      if (element.id === item.id){
        this._drivers.splice(index, 1);
        return;
      }
    });
  }

  Update(item: Driver): void {
    const old = this._drivers.find(x => x.id === item.id);
    if (old){
      const idx = this._drivers.indexOf(old);
      this._drivers[idx] = item;
    }
  }

}
