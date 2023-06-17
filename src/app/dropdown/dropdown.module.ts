import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropDownHomeComponent } from './drop-down-home/drop-down-home.component';


@NgModule({
  declarations: [
    DropDownHomeComponent
  ],
  imports: [
    CommonModule,
    DropdownRoutingModule
  ],
  exports: [
    DropDownHomeComponent
  ]
})
export class DropdownModule { }
