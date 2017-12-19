import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroClinicoComponent } from './cuadro-clinico.component';

describe('CuadroClinicoComponent', () => {
  let component: CuadroClinicoComponent;
  let fixture: ComponentFixture<CuadroClinicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadroClinicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadroClinicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
