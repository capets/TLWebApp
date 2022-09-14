import {IRepository} from "../Interfaces/IRepository";
import {Injectable} from "@angular/core";
import {Trail} from "../Models/Trail";
import {AutoTypesRepositoryInMemory} from "./auto-types-repository-in-memory";
import {TrailCategoriesRepositoryInMemory} from "./trail-categories-repository-in-memory";

@Injectable({
  providedIn: 'root'
})
export class TrailsRepositoryInMemory implements IRepository<Trail, number>{
  private readonly _trails: Array<Trail>;
  constructor(private trailsCategory: TrailCategoriesRepositoryInMemory,
              private autoTypesRepository: AutoTypesRepositoryInMemory) {
    this._trails = [
      new Trail({
        id: 1,
        brand: 'Schmitz',
        plateNumber: 'K111 KK',
        vin: 'DFR232NDHD6744AS',
        trailCategoryId: 1,
        autoTypeId: 2,
        itpExpDate: new Date(2022, 1, 1),
        certCemtExpDate: new Date(2023, 5, 15),
        certRcaExpDate: new Date(2023, 5, 15)
      }),
      new Trail({
        id: 2,
        brand: 'Schwarzmuller',
        plateNumber: 'H005 GR',
        vin: 'HYTF26626262SA',
        trailCategoryId: 1,
        autoTypeId: 1,
        itpExpDate: new Date(2022,10,10),
        certCemtExpDate: new Date(2023, 1, 10)
      }),
      new Trail({
        id: 3,
        brand: 'Wecon',
        plateNumber: 'W405 ER',
        vin: 'JUUIT53563636GF',
        trailCategoryId: 2,
        autoTypeId: 3,
        itpExpDate: new Date(2023, 1, 1),
        certCemtExpDate: new Date(2022, 5, 20)
      }),
      new Trail({
        id: 4,
        brand: 'Krone',
        plateNumber: 'D993 GG',
        vin: 'JUUIT53563636GF',
        trailCategoryId: 2,
        autoTypeId: 1,
        itpExpDate: new Date(2023, 1, 1),
        certCemtExpDate: new Date(2022, 5, 20)
      })
    ];
  }

  Add(item: Trail): void {
    const id = this._trails.length > 0
      ? Math.max(...this._trails.map(x => x.id)) : 0;
    item.id = id + 1;
    this._trails.push(item);
  }

  Get(id: number): Trail | undefined {
    const trail = this._trails.find(x => x.id === id);
    this.setNavigationProperties(trail);
    return trail;
  }

  GetAll(): Trail[] {
    this._trails.forEach(x => this.setNavigationProperties(x));
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

  private setNavigationProperties(item?: Trail){
    if(!item) return;

    item.autoType = this.autoTypesRepository.Get(item.autoTypeId);
    item.trailCategory = this.trailsCategory.Get(item.trailCategoryId);
  }
}
