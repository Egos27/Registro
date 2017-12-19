import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProcedimientoComponent } from './general-procedimiento.component';

describe('GeneralProcedimientoComponent', () => {
  let component: GeneralProcedimientoComponent;
  let fixture: ComponentFixture<GeneralProcedimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralProcedimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
