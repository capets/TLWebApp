import {HttpClient} from "@angular/common/http";
import {map, observable, Observable} from "rxjs";
import {Backend} from "../../Helpers/backend";
import {Service} from "./service";
import {EventEmitter} from "@angular/core";

export abstract class RemoteService<T> extends Service{
  protected _model!: T;
  onChange: EventEmitter<any>;
  protected constructor(private type: new () => T,
                        private controller: string,
                        private httpClient: HttpClient ) {
    super();
    this.onChange = new EventEmitter<any>();
  }

  get activeModel(): T {
    return this._model;
  }
  set activeModel(model: T) {
    this._model = model;
  }
  Get(id: any): Observable<T> {
    return this.httpClient.get<T>(`${Backend.url}/${this.controller}/${id}`)
      .pipe(map(item => {
        this.convertToDate(item);
        item = Object.assign(this.getNew(), item);
        return item;
      }));
  }
  GetAll(): Observable<T[]> {
    const output:T[] = [];
    return this.httpClient.get<T[]>(`${Backend.url}/${this.controller}`)
      .pipe(map(arr => {
        // @ts-ignore
        arr.forEach(item => {
          this.convertToDate(item);
          output.push(Object.assign(this.getNew(), item));
        });
        return output;
      }));
  }
  onAdd(): void {
    this.httpClient.post<T>(`${Backend.url}/${this.controller}`, this.activeModel)
      .subscribe(x => this.onChange.emit());
  }
  onDelete(id: any): void {
    this.httpClient.delete(`${Backend.url}/${this.controller}/${id}`)
      .subscribe(x => this.onChange.emit());
  }
  onUpdate(): void{
    this.httpClient.put<T>(`${Backend.url}/${this.controller}`, this.activeModel)
      .subscribe(x => this.onChange.emit());
  }

  private isStringDate(s:any){
    let pattern = new RegExp('^\\d{4}-\\d{2}-\\d{2}T.*');
   return pattern.test(s);
  }
  private convertToDate(item: T){
      Object.keys(item)
      // @ts-ignore
      .filter(key => this.isStringDate(item[key]))
      .map(key => {
        // @ts-ignore
        let date = new Date(item[key]);
        // @ts-ignore
        item[key] = null;
        if (date.getFullYear() > 1970){
          // @ts-ignore
          item[key] = date;
        }
      });
  }

  private getNew(): T {
    return new this.type();
  }
}
