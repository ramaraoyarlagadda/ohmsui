import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewingRoutingModule } from './viewing-routing.module';
import { ViewingComponent } from './viewing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewingComponent],
  imports: [
    CommonModule,
    ViewingRoutingModule,
    FormsModule
  ]
})
export class ViewingModule { }
