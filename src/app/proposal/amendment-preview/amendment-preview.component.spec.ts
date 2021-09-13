import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendmentPreviewComponent } from './amendment-preview.component';

describe('AmendmentPreviewComponent', () => {
  let component: AmendmentPreviewComponent;
  let fixture: ComponentFixture<AmendmentPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmendmentPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmendmentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
