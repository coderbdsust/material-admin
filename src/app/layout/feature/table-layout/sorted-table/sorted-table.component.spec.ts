import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedTableComponent } from './sorted-table.component';

describe('SortedTableComponent', () => {
  let component: SortedTableComponent;
  let fixture: ComponentFixture<SortedTableComponent>;

  beforeEach(async(() => {
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
