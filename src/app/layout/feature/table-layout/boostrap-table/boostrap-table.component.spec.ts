import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapTableComponent } from './boostrap-table.component';

describe('BoostrapTableComponent', () => {
  let component: BoostrapTableComponent;
  let fixture: ComponentFixture<BoostrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
