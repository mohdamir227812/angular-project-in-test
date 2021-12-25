import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singalton2Component } from './singalton2.component';

describe('Singalton2Component', () => {
  let component: Singalton2Component;
  let fixture: ComponentFixture<Singalton2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singalton2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Singalton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
