import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewingComponent } from './viewing.component';


const routes: Routes = [
  {
    path: '',
    component: ViewingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewingRoutingModule { }
