import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarAreaComponent } from './polar-area.component';

describe('PolarAreaComponent', () => {
  let component: PolarAreaComponent;
  let fixture: ComponentFixture<PolarAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolarAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolarAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
