import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronariografiaComponent } from './coronariografia.component';

describe('CoronariografiaComponent', () => {
  let component: CoronariografiaComponent;
  let fixture: ComponentFixture<CoronariografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronariografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronariografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
