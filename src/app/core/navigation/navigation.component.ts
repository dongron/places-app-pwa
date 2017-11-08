import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NavigatorStateService} from "../../shared/navigator-state.service";
import {Subscriber} from "rxjs/Subscriber";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  navigatorState;
  subscriberNavigatorState;

  constructor(private router: Router, private navigatorStateService: NavigatorStateService) {
  }

  ngOnInit() {
    this.setChangesSubscribers();
    if (!this.navigatorState)
      this.navigatorStateService.setListState();
  }

  ngOnDestroy() {
    this.subscriberNavigatorState.unsubscribe();
  }

  private setChangesSubscribers() {
    this.subscriberNavigatorState = this.navigatorStateService.getState$.subscribe((navState) => {
      this.navigatorState = navState;
    });
  }

  goHome() {
    this.router.navigate(['']);
  }

}
