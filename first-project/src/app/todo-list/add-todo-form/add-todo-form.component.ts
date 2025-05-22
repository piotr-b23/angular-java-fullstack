import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  imports: [],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.scss',
})
export class AddTodoFormComponent {
  addTodo = output<string>();

  addNewTodo(todoName: string) {
    this.addTodo.emit(todoName);
  }
}
