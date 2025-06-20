import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Todo } from '../../shared/interfaces/todo.interface';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { FirstLetterUppercasePipe } from '../../shared/pipes/first-letter-uppercase.pipe';

@Component({
  selector: 'app-todo',
  imports: [NgClass, ModalComponent, FirstLetterUppercasePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todo = input<Todo>();
  index = input<number>();
  delete = output<void>();
  changeStatus = output<void>();
  openModal = false;

  changeTodoStatus() {
    this.changeStatus.emit();
  }

  toggleModal() {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
