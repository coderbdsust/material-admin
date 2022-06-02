import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SortedTableComponent } from './sorted-table.component';

describe('SortedTableComponent', () => {
  let component: SortedTableComponent;
  let fixture: ComponentFixture<SortedTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SortedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
