import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'adding',
    loadChildren: () => import('./adding/adding.module').then(mod => mod.AddingModule)
  },
  {
    path: 'deleting',
    loadChildren: () => import('./deleting/deleting.module').then(mod => mod.DeletingModule)
  },
  {
    path: 'viewing',
    loadChildren: () => import('./viewing/viewing.module').then(mod => mod.ViewingModule)
  },
  {
    path: 'modifing',
    loadChildren: () => import('./modifing/modifing.module').then(mod => mod.ModifingModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
