import { TestBed } from '@angular/core/testing';

import { TaxcalculateService } from './taxcalculate.service';

describe('TaxcalculateService', () => {
  let service: TaxcalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxcalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
