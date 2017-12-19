import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StensColocadosComponent } from './stens-colocados.component';

describe('StensColocadosComponent', () => {
  let component: StensColocadosComponent;
  let fixture: ComponentFixture<StensColocadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StensColocadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StensColocadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
