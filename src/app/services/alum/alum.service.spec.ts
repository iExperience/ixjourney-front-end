import { TestBed } from '@angular/core/testing';

import { AlumService } from './alum.service';

describe('AlumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumService = TestBed.get(AlumService);
    expect(service).toBeTruthy();
  });
});
