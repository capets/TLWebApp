import {Injectable} from "@angular/core";
import {LocalService} from "../base/local-service";
import {Task} from "../../Models/Task";
import {TasksRepositoryInMemory} from "../../Repositories/tasks-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class TasksService extends LocalService<Task>{
  constructor(private tasksRepository: TasksRepositoryInMemory) {
    super(tasksRepository);
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
