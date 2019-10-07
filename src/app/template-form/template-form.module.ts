import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FormDebugComponent } from './../form-debug/form-debug.component';


@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    TemplateFormComponent,
    FormDebugComponent
  ]
})
export class TemplateFormModule { }
