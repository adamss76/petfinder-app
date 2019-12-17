import { TestBed } from '@angular/core/testing';

import { PetFinderApiService } from './pet-finder-api.service';

describe('PetFinderApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetFinderApiService = TestBed.get(PetFinderApiService);
    expect(service).toBeTruthy();
  });
});
