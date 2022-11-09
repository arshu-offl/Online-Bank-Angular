import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EventService]
    });
    service = TestBed.inject(EventService);
  });

  it('Event Service should be created', () => {
    expect(service).toBeTruthy();
  });
});
