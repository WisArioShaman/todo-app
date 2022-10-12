import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input()
  public count = 0;

  constructor() { }

  public decrement(): void {
    this.count--;
  }

  public increment(): void {
    this.count++;
  }
}
