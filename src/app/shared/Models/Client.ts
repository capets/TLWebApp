export class Client{
  id!:number;
  name!:string;
  legalAddress!:string;
  postalAddress!:string;
  fiscalCode!:string;
  Vat!:string;
  Iban!:string;
  tel!:string;
  fax!:string;
  Ceo!:string;
constructor(model?:any) {
  if (model){
    this.id = model.id;
    this.name = model.name;
    this.legalAddress = model.legalAddress;
    this.postalAddress = model.postalAddress;
    this.fiscalCode = model.fiscalCode;
    this.Vat = model.Vat;
    this.Iban = model.Iban;
    this.tel = model.tel;
    this.fax = model.fax;
    this.Ceo = model.Ceo;
  }
}
}
