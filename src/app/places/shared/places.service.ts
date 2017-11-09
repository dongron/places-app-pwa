import {Injectable} from '@angular/core';
import base from '../../shared/base';
import {Observable} from "rxjs/Observable";
import {Http, Jsonp, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';

@Injectable()
export class PlacesService {

  radius = '500'; //meters
  maxwidth = '300';
  types = {
    restaurants: 'restaurant',
    bars: 'bar',
    caffees: 'cafe',
    gyms: 'gym'
  };
  headers = {
    // 'Accept': 'application/json',
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'http://localhost:4200',
    // 'Access-Control-Allow-Credentials': 'true'
    // 'Access-Control-Allow-Origin': true,
    'accept': 'application/json'
  };
  url = base.googlePlacesUrl;
  callback = '&callback=JSONP_CALLBACK';

  constructor(private http: Http,
              private jsonp: Jsonp) {
  }

  getNearbyRestaurants(lat = 50.824592, lng = 19.105755, radius = this.radius) {
    let url = base.googlePlacesUrl + '/place/nearbysearch/json?location=' + lat + ',' + lng
      + '&radius=' + this.radius + '&type=' + this.types.restaurants
      + '&key=' + base.googleApiKey;
    // let headersOpt = {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-MethodsAccess-Control-AllowMethods': 'GET, POST, PUT'
    // };
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-MethodsAccess-Control-AllowMethods', 'GET, POST, PUT');

    let options = new RequestOptions({ headers: headers });
    // let options = new RequestOptions({headers: headers});
    return this.http.get(url, )
      .map(res => res.json());
  }

  XgetNearbyRestaurants(lat = 50.824592, lng = 19.105755, radius = this.radius) {
    let url = base.googlePlacesUrl + '/place/nearbysearch/json?location=' + lat + ',' + lng
      + '&radius=' + this.radius + '&type=' + this.types.restaurants
      + '&key=' + base.googleApiKey;
    return fetch(url, {headers: this.headers}).then((response) => this.parseResponseArray(response));
  }

  XgetPlacePhoto(photoRef = 'CnRnAAAAL3n0Zu3U6fseyPl8URGKD49aGB2Wka7CKDZfamoGX2ZTLMBYgTUshjr') {
    let url = base.googlePlacesUrl + '/place/photo?photoreference=' + photoRef
      + '&key=' + base.googleApiKey + '&maxwidth=' + this.maxwidth;
    return fetch(url, {headers: this.headers}).then(response => response.url);
  }

  XgetPlaceDetails(placeId = "67ac7ef4e4c289bd9cd1a402f86b27e3c7481bd1") {
    let url = base.googlePlacesUrl + '/place/details/json?placeid=' + placeId
      + '&key=' + base.googleApiKey;
    return fetch(url, {headers: this.headers}).then(response => this.parseResponseObject(response));
  }


  XgetCoordinates(searchPlace) {
    let url = base.googlePlacesUrl + '/geocode/json?address=' + searchPlace;
    return fetch(url, {headers: this.headers}).then(response => this.parseCoordData(response));
  }

  parseResponseArray(response, sth?) {
    console.warn('parsing response', response, sth);
    return response.results;
  }

  parseResponseObject(response) {
    return response.result;
  }

  parseCoordData(response) {
    if (response.status !== "OK") {
      return 0;
    }
    let coordinates = {
      latitude: response.results[0].geometry.location.lat || 0,
      longitude: response.results[0].geometry.location.lng || 0
    };
    console.log('REST lat & long', coordinates.latitude, coordinates.longitude);
    return coordinates;
  }


}
