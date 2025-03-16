import { Component } from '@angular/core';
import { Todo } from '../shared/interfaces/todo.interface';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [NgStyle, NgClass],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  public todos: Todo[] = [];
  public errorMsg: string = '';

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
    console.log('Current todo list: ', this.todos);
  }

  public changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  public clearErrorMsg() {
    this.errorMsg = '';
  }
}
