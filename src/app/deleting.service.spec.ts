import { TestBed } from '@angular/core/testing';

import { DeletingService } from './deleting.service';

describe('DeletingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletingService = TestBed.get(DeletingService);
    expect(service).toBeTruthy();
  });
});
