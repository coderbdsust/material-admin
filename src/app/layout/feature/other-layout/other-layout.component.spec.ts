import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLayoutComponent } from './other-layout.component';

describe('OtherLayoutComponent', () => {
  let component: OtherLayoutComponent;
  let fixture: ComponentFixture<OtherLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
