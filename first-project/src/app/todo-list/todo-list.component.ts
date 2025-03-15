import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  public todos: string[] = [];

  public addTodo(todo: string): void {
    if (todo.length <= 3) {
      alert('Task should contain at least 4 letters');
      return;
    }
    this.todos.push(todo);
    console.log('Current todo list: ', this.todos);
  }
}
