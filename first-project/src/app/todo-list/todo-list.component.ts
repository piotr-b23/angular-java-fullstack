import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from '../core/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [AlertComponent, AddTodoFormComponent, TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit, OnDestroy {
  public todos: Todo[] = [];
  public errorMsg: string = '';
  sub: Subscription = new Subscription();

  constructor(private todoSerivce: TodoService) {}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.todos = this.todoSerivce.todos;
    this.sub.add(
      this.todoSerivce.todoChanged.subscribe({
        next: (value) => (this.todos = value),
      })
    );
  }

  public addTodo(todo: string): void {
    if (todo.length <= 3) {
      this.errorMsg = 'Task should contain at least 4 letters';
      return;
    }
    this.todoSerivce.addTodo(todo);
  }

  public clearErrorMsg() {
    this.errorMsg = '';
  }

  deleteTodo(i: number) {
    this.todoSerivce.deleteTodo(i);
  }

  changeTodoStatus(index: number) {
    this.todoSerivce.changeTodoStatus(index);
  }
}
