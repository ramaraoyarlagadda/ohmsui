import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddingRoutingModule } from './adding-routing.module';
import { AddingComponent } from './adding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddingComponent],
  imports: [
    CommonModule,
    AddingRoutingModule,
    FormsModule
  ]
})
export class AddingModule { }
