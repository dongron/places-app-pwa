import {Component, NgZone, OnInit} from '@angular/core';
import {PlacesSharedDataService} from "../shared/places-shared-data.service";
import {PlacesService} from "../shared/places.service";
import {NavigatorStateService} from "../../shared/navigator-state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  constructor(private placesService: PlacesService,
              private placesSharedDataService: PlacesSharedDataService,
              private router: Router,
              private navigatorStateService: NavigatorStateService,
              private zone: NgZone) {
  }

  ngOnInit() {
    this.navigatorStateService.setDetailsSate();
  }

}
