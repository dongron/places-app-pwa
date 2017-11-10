import { TestBed, inject } from '@angular/core/testing';

import { PlacesSharedDataService } from './places-shared-data.service';

describe('PlacesSharedDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlacesSharedDataService]
    });
  });

  it('should be created', inject([PlacesSharedDataService], (service: PlacesSharedDataService) => {
    expect(service).toBeTruthy();
  }));
});
