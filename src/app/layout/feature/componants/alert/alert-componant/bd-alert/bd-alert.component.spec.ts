import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdAlertComponent } from './bd-alert.component';

describe('BdAlertComponent', () => {
  let component: BdAlertComponent;
  let fixture: ComponentFixture<BdAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
