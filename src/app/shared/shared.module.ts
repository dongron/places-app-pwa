import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigatorStateService} from "./navigator-state.service";
import {HttpModule, Jsonp, JsonpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [
    NavigatorStateService
  ],
  declarations: [],
  exports: [
    HttpModule,
    JsonpModule,
  ]
})
export class SharedModule {
}
