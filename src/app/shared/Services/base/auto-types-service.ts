import {Injectable} from "@angular/core";
import {AutoType} from "../../Models/AutoType";
import {RemoteService} from "./remote-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn:'root'
})
export class AutoTypesService extends RemoteService<AutoType>{
  constructor(private http: HttpClient) {
    super(AutoType,'AutoTypes', http);
  }
  onSubmit(): void {
    if (this._model.id > 0){
      this.onUpdate();
    }
    else{
      this.onAdd();
    }
  }
}
