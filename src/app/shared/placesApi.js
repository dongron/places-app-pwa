import base from "./base";

export default class PlacesApi extends RestClient {

    // https://developers.google.com/places/web-service/intro
    radius = '500'; //meters
    maxwidth = '300';
    types = {
        restaurants: 'restaurant',
        bars: 'bar',
        caffees: 'cafe',
        gyms: 'gym'
    };


    constructor() {
        super(base.googlePlacesUrl);
    }

    getNearbyRestaurants(lat = 50.824592, lng = 19.105755, radius = this.radius) {
        let url = '/place/nearbysearch/json?location=' + lat + ',' + lng
            + '&radius=' + this.radius + '&type=' + this.types.restaurants
            + '&key=' + base.googleApiKey;
        return this.GET(url).then(response => this.parseResponseArray(response));
    }

    getPlacePhoto(photoRef = 'CnRnAAAAL3n0Zu3U6fseyPl8URGKD49aGB2Wka7CKDZfamoGX2ZTLMBYgTUshjr') {
        let url = base.googlePlacesUrl + '/place/photo?photoreference=' + photoRef
            + '&key=' + base.googleApiKey + '&maxwidth=' + this.maxwidth;
        return fetch(url).then(response => response.url);
    }

    getPlaceDetails(placeId = "67ac7ef4e4c289bd9cd1a402f86b27e3c7481bd1") {
        let url = '/place/details/json?placeid=' + placeId
            + '&key=' + base.googleApiKey;
        return this.GET(url).then(response => this.parseResponseObject(response));
    }


    getCoordinates(searchPlace) {
        let url = '/geocode/json?address=' + searchPlace;
        return this.GET(url).then(response => this.parseCoordData(response));
    }

    parseResponseArray(response) {
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
};
