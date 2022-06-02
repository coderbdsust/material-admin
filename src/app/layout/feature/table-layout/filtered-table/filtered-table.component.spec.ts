import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilteredTableComponent } from './filtered-table.component';

describe('FilteredTableComponent', () => {
  let component: FilteredTableComponent;
  let fixture: ComponentFixture<FilteredTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
