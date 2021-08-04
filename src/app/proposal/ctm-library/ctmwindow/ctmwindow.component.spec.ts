import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtmwindowComponent } from './ctmwindow.component';

describe('CtmwindowComponent', () => {
  let component: CtmwindowComponent;
  let fixture: ComponentFixture<CtmwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtmwindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtmwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
