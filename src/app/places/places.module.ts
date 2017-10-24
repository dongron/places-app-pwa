import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlacesListComponent, PlaceDetailsComponent]
})
export class PlacesModule { }
