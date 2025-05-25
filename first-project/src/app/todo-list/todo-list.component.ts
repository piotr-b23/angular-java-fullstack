import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from '../core/services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [AlertComponent, AddTodoFormComponent, TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  public errorMsg: string = '';

  constructor(private todoSerivce: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoSerivce.todos;
  }

  public addTodo(todo: string): void {
    if (todo.length <= 3) {
      this.errorMsg = 'Task should contain at least 4 letters';
      return;
    }
    this.todoSerivce.addTodo(todo);
    this.todos = this.todoSerivce.todos;
  }

  public clearErrorMsg() {
    this.errorMsg = '';
  }

  deleteTodo(i: number) {
    this.todoSerivce.deleteTodo(i);
    this.todos = this.todoSerivce.todos;
  }

  changeTodoStatus(index: number) {
    this.todoSerivce.changeTodoStatus(index);
    this.todos = this.todoSerivce.todos;
  }
}
