import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3ListComponent } from './punto3-list.component';

describe('Punto3ListComponent', () => {
  let component: Punto3ListComponent;
  let fixture: ComponentFixture<Punto3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto3ListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
