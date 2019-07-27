import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddingComponent } from './adding.component';


const routes: Routes = [
  {
    path: '',
    component: AddingComponent
  }
  // {
  //   path: '**',
  //   component: AddingComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddingRoutingModule { }
