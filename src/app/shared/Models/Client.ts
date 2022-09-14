export class Client{
  id!:number;
  name!:string;
  legalAddress!:string;
  postalAddress!:string;
  fiscalCode!:string;
  vat!:string;
  iban!:string;
  tel!:string;
  fax!:string;
  ceo!:string;
  isExporter!: boolean;
  isRecipient!: boolean;

constructor(model?:any) {
  if (model){
    this.id = model.id;
    this.name = model.name;
    this.legalAddress = model.legalAddress;
    this.postalAddress = model.postalAddress;
    this.fiscalCode = model.fiscalCode;
    this.vat = model.Vat;
    this.iban = model.Iban;
    this.tel = model.tel;
    this.fax = model.fax;
    this.ceo = model.Ceo;
    this.isExporter = model.isExporter;
    this.isRecipient = model.isRecipient;
  }
}
}
