import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionSistolicaComponent } from './funcion-sistolica.component';

describe('FuncionSistolicaComponent', () => {
  let component: FuncionSistolicaComponent;
  let fixture: ComponentFixture<FuncionSistolicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionSistolicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionSistolicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
