import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2ListComponent } from './punto2-list.component';

describe('Punto2ListComponent', () => {
  let component: Punto2ListComponent;
  let fixture: ComponentFixture<Punto2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
