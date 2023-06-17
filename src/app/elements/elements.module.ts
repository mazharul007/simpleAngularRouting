import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { AlertComponent } from './alert/alert.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    AlertComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
  exports: [
    AlertComponent,
    AccordionComponent
  ]
})
export class ElementsModule { }
