import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeletingRoutingModule } from './deleting-routing.module';
import { DeletingComponent } from './deleting.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DeletingComponent],
  imports: [
    CommonModule,
    DeletingRoutingModule,
    FormsModule
  ]
})
export class DeletingModule { }
