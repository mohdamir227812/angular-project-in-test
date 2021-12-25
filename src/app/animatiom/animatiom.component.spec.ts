import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatiomComponent } from './animatiom.component';

describe('AnimatiomComponent', () => {
  let component: AnimatiomComponent;
  let fixture: ComponentFixture<AnimatiomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatiomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatiomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
