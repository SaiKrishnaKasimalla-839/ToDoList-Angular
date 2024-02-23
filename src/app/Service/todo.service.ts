import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskid = 3;
  todo = [
    {
      id: "1", task: "Task1"
    },
    {
      id: "2", task: "Task2"
    }
  ];

  constructor() { }

  AddTodo(taskname: string): void {
    this.todo.push({ "id": this.taskid.toString(), "task": taskname });
    this.taskid++;
  }

  deletetodo(index:any){
    this.todo.splice(index,1);
  }
}
