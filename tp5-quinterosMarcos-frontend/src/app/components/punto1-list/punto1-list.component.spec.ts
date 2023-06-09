import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto1ListComponent } from './punto1-list.component';

describe('Punto1ListComponent', () => {
  let component: Punto1ListComponent;
  let fixture: ComponentFixture<Punto1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto1ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
