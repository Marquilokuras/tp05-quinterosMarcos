import { TestBed } from '@angular/core/testing';

import { Punto2Service } from './punto2.service';

describe('Punto2Service', () => {
  let service: Punto2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Punto2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
