import { TestBed, inject } from '@angular/core/testing';

import { NavigatorStateService } from './navigator-state.service';

describe('NavigatorStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigatorStateService]
    });
  });

  it('should be created', inject([NavigatorStateService], (service: NavigatorStateService) => {
    expect(service).toBeTruthy();
  }));
});
