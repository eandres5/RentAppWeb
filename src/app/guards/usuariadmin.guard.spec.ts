import { TestBed } from '@angular/core/testing';

import { UsuariadminGuard } from './usuariadmin.guard';

describe('UsuariadminGuard', () => {
  let guard: UsuariadminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsuariadminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
