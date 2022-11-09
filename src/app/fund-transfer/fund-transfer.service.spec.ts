import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FundTransferService } from './fund-transfer.service';

describe('FundTransferService', () => {
  let service: FundTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,]
    });
    service = TestBed.inject(FundTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
