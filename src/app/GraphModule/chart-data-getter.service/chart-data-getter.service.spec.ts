import { TestBed, inject } from '@angular/core/testing';

import { ChartDataGetterService } from './chart-data-getter.service';

describe('ChartDataGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartDataGetterService]
    });
  });

  it('should be created', inject([ChartDataGetterService], (service: ChartDataGetterService) => {
    expect(service).toBeTruthy();
  }));
});
