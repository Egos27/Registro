import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoresRiesgoComponent } from './factores-riesgo.component';

describe('FactoresRiesgoComponent', () => {
  let component: FactoresRiesgoComponent;
  let fixture: ComponentFixture<FactoresRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoresRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoresRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
