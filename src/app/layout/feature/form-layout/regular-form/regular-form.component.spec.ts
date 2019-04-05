import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularFormComponent } from './regular-form.component';

describe('RegularFormComponent', () => {
  let component: RegularFormComponent;
  let fixture: ComponentFixture<RegularFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
