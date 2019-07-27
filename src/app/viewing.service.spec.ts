import { TestBed } from '@angular/core/testing';

import { ViewingService } from './viewing.service';

describe('ViewingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewingService = TestBed.get(ViewingService);
    expect(service).toBeTruthy();
  });
});
