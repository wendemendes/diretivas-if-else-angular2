import { TestBed, inject } from '@angular/core/testing';

import { CusrsosService } from './cusrsos.service';

describe('CusrsosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CusrsosService]
    });
  });

  it('should be created', inject([CusrsosService], (service: CusrsosService) => {
    expect(service).toBeTruthy();
  }));
});
