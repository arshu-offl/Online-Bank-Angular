import { TestBed } from '@angular/core/testing';

import { FundTransferService } from './fund-transfer.service';

describe('FundTransferService', () => {
  let service: FundTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
