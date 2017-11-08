import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PlacesListComponent} from "./places-list/places-list.component";
import {PlaceDetailsComponent} from "./place-details/place-details.component";

const placesRoutes: Routes = [
  // {path: '', redirectTo: 'test', pathMatch: 'full'},
  {path: '', component: PlacesListComponent},
  {path: ':id', component: PlaceDetailsComponent},
  {path: 'test', component: PlaceDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(placesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PlacesRoutingModule {
}
