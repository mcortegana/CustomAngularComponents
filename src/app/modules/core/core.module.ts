import {NgModule} from '@angular/core';

import {CoreRouting} from './core.routing';
import {CoreComponent} from './core.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CoreComponent],
  imports: [
    SharedModule,
    CoreRouting
  ]
})
export class CoreModule { }
