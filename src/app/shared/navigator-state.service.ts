import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class NavigatorStateService {

  private state = new Subject<any>();
  private startState = {
    title: 'List of places',
    isBackButton: false
  };

  constructor() {
    // this.setListState();
  }

  getState$ = this.state.asObservable();

  setDetailsSate(placeName: string = 'Details') {
    const detailsState = {
      title: placeName,
      isBackButton: true
    };
    this.state.next(Object.assign(detailsState));
  }

  setListState() {
    console.warn('set details state');
    this.state.next(Object.assign(this.startState));
  }

}
