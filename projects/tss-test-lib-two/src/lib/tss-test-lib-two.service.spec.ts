import { TestBed, inject } from '@angular/core/testing';

import { TssTestLibTwoService } from './tss-test-lib-two.service';

describe('TssTestLibTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TssTestLibTwoService]
    });
  });

  it('should be created', inject([TssTestLibTwoService], (service: TssTestLibTwoService) => {
    expect(service).toBeTruthy();
  }));
});
