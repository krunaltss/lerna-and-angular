import { TestBed, inject } from '@angular/core/testing';

import { TssTestLibOneService } from './tss-test-lib-one.service';

describe('TssTestLibOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TssTestLibOneService]
    });
  });

  it('should be created', inject([TssTestLibOneService], (service: TssTestLibOneService) => {
    expect(service).toBeTruthy();
  }));
});
