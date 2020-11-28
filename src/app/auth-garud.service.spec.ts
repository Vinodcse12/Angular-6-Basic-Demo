import { TestBed, inject } from '@angular/core/testing';

import { AuthGarudService } from './auth-garud.service';

describe('AuthGarudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGarudService]
    });
  });

  it('should be created', inject([AuthGarudService], (service: AuthGarudService) => {
    expect(service).toBeTruthy();
  }));
});
