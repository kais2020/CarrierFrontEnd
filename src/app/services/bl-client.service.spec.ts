import { TestBed } from '@angular/core/testing';

import { BlClientService } from './bl-client.service';

describe('BlClientService', () => {
  let service: BlClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
