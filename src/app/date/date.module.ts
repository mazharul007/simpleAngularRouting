import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateRoutingModule } from './date-routing.module';
import { DatePickerComponent } from './date-picker/date-picker.component';


@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    DateRoutingModule
  ],
  exports: [
    DatePickerComponent
  ]
})
export class DateModule { }
