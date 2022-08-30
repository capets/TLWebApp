import {IRepository} from "../Interfaces/IRepository";
import {Injectable} from "@angular/core";
import {Trail} from "../Models/Trail";

@Injectable({
  providedIn: 'root'
})
export class TrailsRepositoryInMemory implements IRepository<Trail, number>{
  private readonly _trails: Array<Trail>;
  constructor() {
    this._trails = [];

    let trail = new Trail();
    trail.id = 1;
    trail.brand = 'Schmitz';
    trail.plateNumber = 'K111 KK';
    trail.vin = 'DFR232NDHD6744AS';
    trail.itpExpDate = new Date(2022,1,1);
    trail.certCemtExpDate = new Date(2023, 5, 15);
    trail.certRcaExpDate = new Date(2023, 5, 15);
    this._trails.push(trail);

    trail = new Trail();
    trail.id = 2;
    trail.brand = 'Schwarzmuller';
    trail.plateNumber = 'H005 GR';
    trail.vin = 'HYTF26626262SA';
    trail.itpExpDate = new Date(2022,10,10);
    trail.certCemtExpDate = new Date(2023, 1, 10);
    this._trails.push(trail);

    trail = new Trail();
    trail.id = 3;
    trail.brand = 'Wecon';
    trail.plateNumber = 'W405 ER';
    trail.vin = 'JUUIT53563636GF';
    trail.itpExpDate = new Date(2023,1,1);
    trail.certCemtExpDate = new Date(2022, 5, 20);
    this._trails.push(trail);

    trail = new Trail();
    trail.id = 4;
    trail.brand = 'Krone';
    trail.plateNumber = 'D993 GG';
    trail.vin = 'JUUIT53563636GF';
    trail.itpExpDate = new Date(2023,1,1);
    trail.certCemtExpDate = new Date(2022, 5, 20);
    this._trails.push(trail);
  }
  Add(item: Trail): void {
    const id = Math.max(...this._trails.map(x => x.id));
    item.id = id + 1;
    this._trails.push(item);
  }

  Get(id: number): Trail | undefined {
    return this._trails.find(x => x.id === id);
  }

  GetAll(): Trail[] {
    return this._trails;
  }

  Remove(item: Trail): void {
    this._trails.forEach((element,index)=>{
      if (element.id === item.id){
        this._trails.splice(index, 1);
        return;
      }
    });
  }

  Update(item: Trail): void {
    const old = this._trails.find(x => x.id === item.id);
    if (old){
      const idx = this._trails.indexOf(old);
      this._trails[idx] = item;
    }
  }
}
