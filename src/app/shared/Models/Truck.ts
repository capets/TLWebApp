export class Truck{
  brand: string;
  height: number =0;
  id?: number;
  length: number =0;
  plateNumber: string;
  vin: string='';
  volum: number=0;
  width: number=0;

  constructor(id:number, brand:string, plateNumber:string, vin:string) {
    this.id=id;
    this.brand = brand;
    this.plateNumber = plateNumber;
    this.vin = vin;
  }
}
