import { TestBed } from '@angular/core/testing';

import { BankAccntService } from './bank-accnt.service';

describe('BankAccntService', () => {
  let service: BankAccntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    providers:[BankAccntService]

  });
  service = TestBed.inject(BankAccntService);


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
