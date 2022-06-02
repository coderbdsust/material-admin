import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginatedTableComponent } from './paginated-table.component';

describe('PaginatedTableComponent', () => {
  let component: PaginatedTableComponent;
  let fixture: ComponentFixture<PaginatedTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
