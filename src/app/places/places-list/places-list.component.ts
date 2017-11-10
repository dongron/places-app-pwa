import {Component, NgZone, OnInit} from '@angular/core';
import {PlacesService} from "../shared/places.service";
import {NavigatorStateService} from "../../shared/navigator-state.service";
import {PlacesSharedDataService} from "../shared/places-shared-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: any[];

  constructor(private placesService: PlacesService,
              private placesSharedDataService: PlacesSharedDataService,
              private router: Router,
              private navigatorStateService: NavigatorStateService,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.navigatorStateService.setListState();
    this.places = [];
    this.getPlaces();
  }

  getPlaces() {
    this.placesService.triggerGettingNearbyRestaurants();
    this.placesService.getNearbyPlaces$.subscribe((data) => {
      console.warn('map!', data.map(item => {
        return {
          name: item.name,
          lat: item.geometry.location.lat,
          lng: item.geometry.location.lng,
          rating: item.rating
        };
      }));
      this.zone.run(() => {
        this.places = [...data];
        console.warn('this.places!', this.places);
      });
    });
  }

  getOpenStatusIcon(item) {
    if (item.opening_hours && item.opening_hours.open_now)
      return 'unlock';
    else
      return 'lock';
  }

  onItemClick(item) {
    this.placesSharedDataService.setPlaceDetails(item);
    this.navigatorStateService.setGoBackAction(this.nextGoBackAction);
    this.router.navigate(['/', item.place_id])
      .then((routeSuccess) => {
      })
      .catch((routeErr) => {
        console.error(routeErr);
      });
  }

  private nextGoBackAction = () => {
    this.router.navigate(['/'])
      .then((routeSuccess) => {
      })
      .catch((routeErr) => {
        console.error(routeErr);
      });
  }

}
