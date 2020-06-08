import { TestBed } from '@angular/core/testing';

import { Storage1Service } from './storage1.service';

describe('Storage1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Storage1Service = TestBed.get(Storage1Service);
    expect(service).toBeTruthy();
  });
});
