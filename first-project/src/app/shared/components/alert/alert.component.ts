import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  errorMessage = input<string>('');
  clearMessage = output<void>();

  clearErrorMsg() {
    this.clearMessage.emit();
  }
}
