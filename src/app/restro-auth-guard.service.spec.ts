import { TestBed } from '@angular/core/testing';

import { RestroAuthGuardService } from './restro-auth-guard.service';

describe('RestroAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestroAuthGuardService = TestBed.get(RestroAuthGuardService);
    expect(service).toBeTruthy();
  });
});
