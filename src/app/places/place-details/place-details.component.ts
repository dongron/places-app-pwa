import {Component, NgZone, OnInit} from '@angular/core';
import {PlacesSharedDataService} from "../shared/places-shared-data.service";
import {PlacesService} from "../shared/places.service";
import {NavigatorStateService} from "../../shared/navigator-state.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  place: any;

  constructor(private placesService: PlacesService,
              private placesSharedDataService: PlacesSharedDataService,
              private router: Router,
              private route: ActivatedRoute,
              private navigatorStateService: NavigatorStateService,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.navigatorStateService.setDetailsSate();
    this.getPlaceData();
  }

  getPlaceData() {
    this.place = this.placesSharedDataService.getPlaceDetails();
    let placeId = this.place.place_id;
    if (!placeId) {
      this.route.params.subscribe(params => {
        placeId = params['id'];
      });
    }
    this.placesService.triggerGettingPlaceDetails(placeId);
    this.placesService.getPlaceDetails$.subscribe((data) => {
      this.zone.run(() => {
        console.warn('data in details', data);
        this.place.fullAddress = data.formatted_address;
        this.place.phone = data.formatted_phone_number;
        this.place.coords = data.geometry.location;
        this.place.photo = data.photos[0].getUrl({'maxWidth': 800});
      });
    });
  }

}
