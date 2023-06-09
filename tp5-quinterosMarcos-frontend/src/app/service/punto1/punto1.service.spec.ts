import { TestBed } from '@angular/core/testing';

import { Punto1Service } from './punto1.service';

describe('Punto1Service', () => {
  let service: Punto1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Punto1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
