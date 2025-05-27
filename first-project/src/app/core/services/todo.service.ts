import { Injectable } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public _todos: Todo[] = [];

  public todoChanged = new Subject<Todo[]>();

  public get todos() {
    return this._todos.slice();
  }

  constructor() {
    const localStorageTodos = localStorage.getItem('todos');
    if (localStorageTodos) {
      this._todos = JSON.parse(localStorageTodos);
      this.todoChanged.next(this._todos);
    }
  }

  public addTodo(name: string): void {
    const newTodo: Todo = {
      name: name,
      isCompleted: false,
    };
    this._todos.push(newTodo);
    this.saveToLocalStorage();
    this.todoChanged.next(this._todos);
  }

  deleteTodo(i: number) {
    this._todos = this.todos.filter((_todo, index) => index !== i);
    this.saveToLocalStorage();
    this.todoChanged.next(this._todos);
  }

  changeTodoStatus(index: number) {
    this._todos[index] = {
      ...this.todos[index],
      isCompleted: !this.todos[index].isCompleted,
    };
    this.saveToLocalStorage();
    this.todoChanged.next(this._todos);
  }

  public saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
