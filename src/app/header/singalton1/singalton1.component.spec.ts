import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singalton1Component } from './singalton1.component';

describe('Singalton1Component', () => {
  let component: Singalton1Component;
  let fixture: ComponentFixture<Singalton1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singalton1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Singalton1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
