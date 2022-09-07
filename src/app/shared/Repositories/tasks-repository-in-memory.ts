import {Injectable} from "@angular/core";
import {IRepository} from "../Interfaces/IRepository";
import {Task} from "../Models/Task";

@Injectable({
  providedIn:'root'
})
export class TasksRepositoryInMemory implements IRepository<Task, number>{
  private readonly _tasks: Task[];
  constructor() {
    this._tasks = [
      new Task({
        id: 1,
        title: 'Ceva de facut',
        date: '06.09.2022'
      }),
      new Task({
        id: 2,
        title: 'Ceva de adus',
        date: '07.09.2022'
      }),
      new Task({
        id: 3,
        title: 'Ceva de mancat',
        date: '08.09.2022'
      }),
    ];
  }
  Add(item: Task): void {
    const id = Math.max(...this._tasks.map(x => x.id));
    item.id = id + 1;
    this._tasks.push(item);
  }

  Get(id: number): Task | undefined {
    return this._tasks.find(x => x.id === id);
  }

  GetAll(): Task[] {
    return this._tasks;
  }

  Remove(item: Task): void {
    this._tasks.forEach((element,index)=>{
      if (element.id === item.id){
        this._tasks.splice(index, 1);
        return;
      }
    });
  }

  Update(item: Task): void {
    const old = this._tasks.find(x => x.id === item.id);
    if (old){
      const idx = this._tasks.indexOf(old);
      this._tasks[idx] = item;
    }
  }

}
