import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class NavigatorStateService {

  private state = new Subject<any>();
  private startState = {
    title: 'List of places',
    isBackButton: false
  };
  private goBackAction: any;

  constructor() {
    this.goBackAction = function () {
    };
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

  setGoBackAction(action) {
    this.goBackAction = action;
  }

  triggerGoBackAction() {
    console.log('back action triggered');
    this.goBackAction();
  }

}
