import {Component, OnInit} from '@angular/core';
import {PlacesService} from "../shared/places.service";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {

  places;

  constructor(private placesSrvice: PlacesService) {
  }

  ngOnInit() {
    this.places = {};
  }

}
