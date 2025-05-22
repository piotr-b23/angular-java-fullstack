import { Component } from '@angular/core';
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

  public clearErrorMsg() {
    this.errorMsg = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((_todo, index) => index !== i);
  }
}
