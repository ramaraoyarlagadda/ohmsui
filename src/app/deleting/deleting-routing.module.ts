import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeletingComponent } from './deleting.component';


const routes: Routes = [
  {
    path: '',
    component: DeletingComponent
  }
  // {
  //   path: '**',
  //   component: DeletingComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletingRoutingModule { }
