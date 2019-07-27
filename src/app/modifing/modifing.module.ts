import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModifingRoutingModule } from './modifing-routing.module';
import { ModifingComponent } from './modifing.component';


@NgModule({
  declarations: [ModifingComponent],
  imports: [
    CommonModule,
    ModifingRoutingModule
  ]
})
export class ModifingModule { }
