import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifingComponent } from './modifing.component';


const routes: Routes = [
  {
    path: '',
    component: ModifingComponent
  }
  // {
  //   path: '**',
  //   component: ModifingComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifingRoutingModule { }
