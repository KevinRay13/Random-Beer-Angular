import { TestBed } from '@angular/core/testing';

import { RandomBeerService } from './random-beer.service';

describe('RandomBeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomBeerService = TestBed.get(RandomBeerService);
    expect(service).toBeTruthy();
  });
});
