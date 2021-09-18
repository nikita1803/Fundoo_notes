import { TestBed } from '@angular/core/testing';

import { AuthgaurdService.TsService } from './authgaurd-service.ts.service';

describe('AuthgaurdService.TsService', () => {
  let service: AuthgaurdService.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthgaurdService.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
