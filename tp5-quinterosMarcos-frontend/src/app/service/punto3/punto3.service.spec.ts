import { TestBed } from '@angular/core/testing';

import { Punto3Service } from './punto3.service';

describe('Punto3Service', () => {
  let service: Punto3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Punto3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
