import {Injectable} from '@angular/core';

@Injectable()
export class PlacesSharedDataService {

  //name, isOpen, distance, address, phoneNr
  placeObject: any;

  constructor() {
  }

  setPlaceDetails(value): void {
    if (!value.name || !value.vicinity) {
      console.error('not enough data for service', value);
      return;
    }
    this.placeObject = this.convertToPlainItem(value);
  }

  getPlaceDetails(): any {
    return Object.assign(this.placeObject);
  }

  private convertToPlainItem(item) {
    // 4 types of id, wtf ???
    return {
      'name': item.name,
      'isOpen': (item.opening_hours && item.opening_hours.open_now) || null,
      'address': item.vicinity,
      'reference': item.reference,
      'place_id': item.place_id,
      'id': item.id
      // 'phone': item || null,
    };
  }

}
