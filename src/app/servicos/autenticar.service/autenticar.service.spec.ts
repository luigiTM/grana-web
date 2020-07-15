import { TestBed } from '@angular/core/testing';

import { LoginService } from './autenticar.service';

describe('AutenticarService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
