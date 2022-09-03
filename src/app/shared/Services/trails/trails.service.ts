import {Injectable, OnInit} from '@angular/core';
import {Service} from "../base/service";
import {Trail} from "../../Models/Trail";
import {TrailsRepositoryInMemory} from "../../Repositories/trails-repository-in-memory";

@Injectable({
  providedIn: 'root'
})
export class TrailsService extends Service<Trail> implements OnInit{
  constructor(private trailRepository: TrailsRepositoryInMemory) {
    super(trailRepository);
  }

  ngOnInit(): void {
  }

  Get(id: number | undefined): Trail | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): Trail[] {
    return this.repository.GetAll();
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
