import { TestBed } from '@angular/core/testing';

import { Storage2Service } from './storage2.service';

describe('Storage2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Storage2Service = TestBed.get(Storage2Service);
    expect(service).toBeTruthy();
  });
});
