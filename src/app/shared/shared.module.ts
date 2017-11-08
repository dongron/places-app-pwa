import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigatorStateService} from "./navigator-state.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    NavigatorStateService
  ],
  declarations: [],
  exports: [
  ]
})
export class SharedModule {
}
