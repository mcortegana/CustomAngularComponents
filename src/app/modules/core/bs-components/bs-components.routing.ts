import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BsComponentsComponent} from './bs-components.component';


const routes: Routes = [
  {
    path: '',
    component: BsComponentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsComponentsRouting { }
