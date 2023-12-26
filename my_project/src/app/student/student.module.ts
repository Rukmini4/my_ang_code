import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
console.log('student module.....');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
