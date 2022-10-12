import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperComponent } from './components';


@NgModule({
  declarations: [
    StepperComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StepperComponent,
  ],
})
export class UiModule { }
