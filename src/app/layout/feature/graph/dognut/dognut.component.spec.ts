import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DognutComponent } from './dognut.component';

describe('DognutComponent', () => {
  let component: DognutComponent;
  let fixture: ComponentFixture<DognutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DognutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DognutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
