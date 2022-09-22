import {Injectable} from '@angular/core';
import {Trail} from "../../Models/Trail";
import {RemoteService} from "../base/remote-service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrailsService extends RemoteService<Trail>{
  constructor(private http: HttpClient) {
    super(Trail, 'Trails', http);
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
