import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstruccionComponent } from './obstruccion.component';

describe('ObstruccionComponent', () => {
  let component: ObstruccionComponent;
  let fixture: ComponentFixture<ObstruccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObstruccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
