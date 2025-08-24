import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { FirstLetterDirective } from '../../shared/validators/first-letter.directive';

@Component({
  selector: 'app-add-todo-form',
  imports: [FormsModule, AlertComponent, FirstLetterDirective],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.scss',
})
export class AddTodoFormComponent {
  addTodo = output<string>();

  todoName = '';
  // person = { name: 'John', age: 30 };

  addNewTodo() {
    this.addTodo.emit(this.todoName);
  }
}
