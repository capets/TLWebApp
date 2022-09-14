export abstract class CategoryBase{
  id!:number;
  name!:string;
  constructor(model?:any) {
    if (model){
      this.id = model.id;
      this.name = model.name;
    }
  }
}
