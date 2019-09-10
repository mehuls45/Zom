import { TestBed } from '@angular/core/testing';

import { RestroService } from './restro.service';

describe('RestroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestroService = TestBed.get(RestroService);
    expect(service).toBeTruthy();
  });
});
