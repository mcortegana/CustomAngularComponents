import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BsDropdownModule, ButtonsModule, TooltipModule} from 'ngx-bootstrap';



@NgModule({
  declarations: [],
  imports: [
    BsDropdownModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    ButtonsModule,
    TooltipModule
  ]
})
export class BootstrapModule { }
