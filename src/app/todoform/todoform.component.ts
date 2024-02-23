import { Component } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent {
  constructor(private service:TodoService){}
  todoinput="";
  ngOnInit(){}
  Addtask(){
      this.service.AddTodo(this.todoinput);
  }
  reset(){
      this.todoinput="";
  }
}

