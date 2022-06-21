import { TestBed } from '@angular/core/testing';

import { IntercationService } from './intercation.service';

describe('IntercationService', () => {
  let service: IntercationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
