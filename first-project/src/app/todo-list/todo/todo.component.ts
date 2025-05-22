import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  imports: [NgClass],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todo = input<Todo>();
  index = input<number>();

  changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}
