import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation/navigation.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule, MatToolbarModule} from "@angular/material";
import {NavigatorStateService} from "../shared/navigator-state.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
  ],
  declarations: [
    NavigationComponent
  ],
  providers: [
    NavigatorStateService
  ],
  exports: [
    NavigationComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
  ]
})
export class CoreModule {
}
