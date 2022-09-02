import {mod} from "ngx-bootstrap/chronos/utils";
import {concatAll} from "rxjs";

export class Driver{
  id!:number;
  firstName?:string = '';
  lastName?:string = '';
  nationalId?:string;
  birthDate?:Date;
  licExpDate?:Date;
  tahoExpDate?:Date;
  medExpDate?:Date;
  nationalExpDate?:Date;
  passportExpDate?:Date;

  constructor(model?: any) {
    if (model){
      this.id = model.id;
      this.firstName = model.firstName;
      this.lastName = model.lastName;
      this.nationalId = model.nationalId;
      this.birthDate = model.birthDate;
      this.licExpDate = model.licExpDate;
      this.tahoExpDate = model.tahoExpDate;
      this.medExpDate = model.medExpDate;
      this.nationalExpDate = model.nationalExpDate;
      this.passportExpDate = model.passportExpDate;
    }
  }

  get fullName():string{
    return this.firstName + ' ' + this.lastName;
  }
}
