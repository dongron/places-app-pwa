import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlacesListComponent} from './places-list/places-list.component';
import {PlaceDetailsComponent} from './place-details/place-details.component';
import {PlacesService} from "./shared/places.service";
import {PlacesRoutingModule} from "./places-routing.module";
import {MatIconModule, MatListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    PlacesRoutingModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    PlacesService
  ],
  declarations: [
    PlacesListComponent,
    PlaceDetailsComponent
  ]
})
export class PlacesModule {
}
