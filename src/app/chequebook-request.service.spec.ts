import { TestBed } from '@angular/core/testing';

import { ChequebookRequestService } from './chequebook-request.service';

describe('ChequebookRequestService', () => {
  let service: ChequebookRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChequebookRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
