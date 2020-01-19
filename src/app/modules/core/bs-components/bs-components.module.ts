import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsComponentsRouting } from './bs-components.routing';
import {BsComponentsComponent} from './bs-components.component';
import { CustomInputGroupComponent } from './components/custom-input-group/custom-input-group.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [BsComponentsComponent, CustomInputGroupComponent],
  imports: [
    SharedModule,
    BsComponentsRouting
  ]
})
export class BsComponentsModule { }
