import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelgateDateRangeComponent } from './delgate-date-range.component';

describe('DelgateDateRangeComponent', () => {
  let component: DelgateDateRangeComponent;
  let fixture: ComponentFixture<DelgateDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelgateDateRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelgateDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
