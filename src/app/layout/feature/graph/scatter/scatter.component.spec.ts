import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScatterComponent } from './scatter.component';

describe('ScatterComponent', () => {
  let component: ScatterComponent;
  let fixture: ComponentFixture<ScatterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
