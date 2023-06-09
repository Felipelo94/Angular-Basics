import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponentItem {
  title = 'Counter';
  counter = 10;

  increaseBy(): void {
    this.counter += 1;
  }
  decreaseBy(): void {
    this.counter -= 1;
  }

  setInitialValue(value: number): void {
    this.counter = value;
  }
}
