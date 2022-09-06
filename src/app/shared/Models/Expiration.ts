export class Expiration{
  name!: string;
  values!: any;
  constructor(model?: any) {
    if (model){
      this.name = model.name;
      this.values = model.values;
    }
  }
}
