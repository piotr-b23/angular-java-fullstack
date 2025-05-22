import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo.interface';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-todo',
  imports: [NgClass, ModalComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todo = input<Todo>();
  index = input<number>();
  delete = output<void>();
  openModal = false;

  changeTodoStatus(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
