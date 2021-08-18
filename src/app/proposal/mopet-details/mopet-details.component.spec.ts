import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MopetDetailsComponent } from './mopet-details.component';

describe('MopetDetailsComponent', () => {
  let component: MopetDetailsComponent;
  let fixture: ComponentFixture<MopetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MopetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MopetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
