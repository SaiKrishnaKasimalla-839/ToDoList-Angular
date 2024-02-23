import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
 
  constructor(private service: TodoService) { }
  todos!: any[];
  ngOnInit(): void {
    this.todos = this.service.todo;
  }
  delete(index:any){
    this.service.deletetodo(index);
  }
}
