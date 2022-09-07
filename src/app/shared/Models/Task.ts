export class Task {
  id!:number;
  title!:string;
  date?:string;
constructor(model?:any) {
  if (model){
    this.id = model.id;
    this.title = model.title;
    this.date = model.date;
  }
}
}
