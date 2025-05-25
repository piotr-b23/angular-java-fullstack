import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-todo-list',
  imports: [AlertComponent, AddTodoFormComponent, TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  public todos: Todo[] = [];
  public errorMsg: string = '';

  ngOnInit(): void {
    const localStorageTodos = localStorage.getItem('todos');
    if (localStorageTodos) {
      this.todos = JSON.parse(localStorageTodos);
    }
  }

  public addTodo(todo: string): void {
    if (todo.length <= 3) {
      this.errorMsg = 'Task should contain at least 4 letters';
      return;
    }
    const newTodo: Todo = {
      name: todo,
      isCompleted: false,
    };
    this.todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  public clearErrorMsg() {
    this.errorMsg = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((_todo, index) => index !== i);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  changeTodoStatus(index: number) {
    this.todos[index] = {
      ...this.todos[index],
      isCompleted: !this.todos[index].isCompleted,
    };
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
