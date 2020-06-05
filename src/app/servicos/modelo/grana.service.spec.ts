import { TestBed } from '@angular/core/testing';

import { GranaService } from './grana.service';

describe('GranaService', () => {
  let service: GranaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GranaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
