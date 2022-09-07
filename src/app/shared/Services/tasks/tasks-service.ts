import {Injectable} from "@angular/core";
import {Service} from "../base/service";
import {Task} from "../../Models/Task";
import {TasksRepositoryInMemory} from "../../Repositories/tasks-repository-in-memory";

@Injectable({
  providedIn:'root'
})
export class TasksService extends Service<Task>{
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

  Get(id: number | undefined): Task | undefined {
    if (id){
      return this.repository.Get(id);
    }
    return undefined;
  }

  GetAll(): Task[] {
    return this.repository.GetAll();
  }
}
