import {Component, NgZone, OnInit} from '@angular/core';
import {PlacesService} from "../shared/places.service";
import {NavigatorStateService} from "../../shared/navigator-state.service";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places: any[];

  constructor(private placesService: PlacesService,
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
    // this.places = [{name: 'dupa'}, {name: 'dupa2'}];
    this.placesService.getNearbyPlaces$.subscribe((data) => {
      console.warn('map!', data.map(item => {
        return {
          name: item.name,
          lat: item.geometry.location.lat,
          lng: item.geometry.location.lng,
          rating: item.rating
        }
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
    console.log(item);
  }

}
