import {Component, OnInit} from '@angular/core';
import {PlacesService} from "../shared/places.service";
import {NavigatorStateService} from "../../shared/navigator-state.service";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places;

  constructor(private placesService: PlacesService,
              private navigatorStateService: NavigatorStateService) {
  }

  ngOnInit() {
    this.navigatorStateService.setListState();
    this.places = [];
    this.getPlaces();
  }

  getPlaces() {
    console.warn('getting places');
    this.placesService.getNearbyRestaurants().subscribe((data) => {
      console.warn('data', data);
    });
  }

}
