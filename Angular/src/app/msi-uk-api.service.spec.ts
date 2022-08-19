import { TestBed } from '@angular/core/testing';

import { MSIUKAPIService } from './msi-uk-api.service';

describe('MSIUKAPIService', () => {
  let service: MSIUKAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MSIUKAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
