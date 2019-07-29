import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifingRoutingModule } from './modifing-routing.module';
import { ModifingComponent } from './modifing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ModifingComponent],
  imports: [
    CommonModule,
    ModifingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModifingModule { }
